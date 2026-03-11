#!/usr/bin/env node
/**
 * Patch @easyops-cn/docusaurus-search-local to support Korean (Hangul) search.
 * Korean characters (U+AC00-U+D7AF) are not in \p{Unified_Ideograph},
 * so they are skipped during tokenization.
 */
const fs = require('fs');
const path = require('path');

const PLUGIN_DIR = path.join('node_modules', '@easyops-cn', 'docusaurus-search-local', 'dist');

function patchFile(filePath, patches) {
  if (!fs.existsSync(filePath)) {
    console.log(`[patch] WARNING: ${filePath} not found`);
    return false;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [search, replace] of patches) {
    if (content.includes(search)) {
      content = content.replace(search, replace);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`[patch] Patched: ${filePath}`);
  } else {
    console.log(`[patch] Already patched or pattern not found: ${filePath}`);
  }
  return changed;
}

console.log('[patch] Adding Korean (Hangul) support to docusaurus-search-local...');

// 1. Server-side tokenizer: add Hangul to regex and handle Korean tokens
const serverTokenizer = path.join(PLUGIN_DIR, 'server', 'server', 'utils', 'tokenizer.js');
patchFile(serverTokenizer, [
  // Add \p{Script=Hangul}+ to the consecutive word regex
  [
    String.raw`/\w+|\p{Unified_Ideograph}+/u`,
    String.raw`/\w+|\p{Unified_Ideograph}+|\p{Script=Hangul}+/u`
  ],
  // Add Korean branch before jieba processing
  [
    'for (const zhWord of jieba_1.default.cut(word)) {',
    String.raw`if (/\p{Script=Hangul}/u.test(word[0])) { tokens.push(new lunr_1.default.Token(word, Object.assign(Object.assign({}, lunr_1.default.utils.clone(metadata)), { position: [start, word.length], index: tokens.length }))); start += word.length; } else for (const zhWord of jieba_1.default.cut(word)) {`
  ]
]);

// 2. Client-side tokenizer: add Hangul to regex
const clientTokenizer = path.join(PLUGIN_DIR, 'client', 'client', 'utils', 'tokenize.js');
patchFile(clientTokenizer, [
  [
    String.raw`/\w+|\p{Unified_Ideograph}+/gu`,
    String.raw`/\w+|\p{Unified_Ideograph}+|\p{Script=Hangul}+/gu`
  ]
]);

// 3. Client-side smartTerms: handle Korean tokens (don't use zhDictionary)
const clientSmartTerms = path.join(PLUGIN_DIR, 'client', 'client', 'utils', 'smartTerms.js');
patchFile(clientSmartTerms, [
  [
    String.raw`if (/\p{Unified_Ideograph}/u.test(token)) {`,
    String.raw`if (/\p{Script=Hangul}/u.test(token)) { return [{ value: token }]; } else if (/\p{Unified_Ideograph}/u.test(token)) {`
  ]
]);

// 4. Server lunrLanguageZh: add Hangul ranges to wordCharacters
const lunrZh = path.join(PLUGIN_DIR, 'server', 'shared', 'lunrLanguageZh.js');
if (fs.existsSync(lunrZh)) {
  let content = fs.readFileSync(lunrZh, 'utf8');
  // The file contains literal double-backslash sequences: \\u3400
  // We need to add Hangul ranges before the existing CJK ranges
  const searchStr = '"\\\\u3400-\\\\u4DBF';
  const replaceStr = '"\\\\uAC00-\\\\uD7AF\\\\u1100-\\\\u11FF\\\\u3130-\\\\u318F\\\\u3400-\\\\u4DBF';
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(lunrZh, content);
    console.log(`[patch] Patched: ${lunrZh}`);
  } else if (content.includes('\\\\uAC00')) {
    console.log(`[patch] Already patched: ${lunrZh}`);
  } else {
    console.log(`[patch] WARNING: Could not find target string in ${lunrZh}`);
  }
} else {
  console.log(`[patch] WARNING: ${lunrZh} not found`);
}

console.log('[patch] Korean search support patching complete!');
