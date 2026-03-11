#!/bin/sh
# Patch @easyops-cn/docusaurus-search-local to support Korean (Hangul) search
# Korean characters (U+AC00-U+D7AF) are not included in \p{Unified_Ideograph},
# so they are completely skipped during tokenization.

PLUGIN_DIR="node_modules/@easyops-cn/docusaurus-search-local/dist"

echo "[patch] Adding Korean (Hangul) support to docusaurus-search-local..."

# 1. Server-side tokenizer: add Hangul to regex and handle Korean tokens
SERVER_TOKENIZER="$PLUGIN_DIR/server/server/utils/tokenizer.js"
if [ -f "$SERVER_TOKENIZER" ]; then
  node -e '
    const fs = require("fs");
    let content = fs.readFileSync("'"$SERVER_TOKENIZER"'", "utf8");
    let changed = false;

    // Fix regex to include Hangul
    const oldRegex = String.raw`/\w+|\p{Unified_Ideograph}+/u`;
    const newRegex = String.raw`/\w+|\p{Unified_Ideograph}+|\p{Script=Hangul}+/u`;
    if (content.includes(oldRegex)) {
      content = content.replace(oldRegex, newRegex);
      changed = true;
    }

    // Add Korean branch before jieba (Chinese) processing
    const oldJieba = "for (const zhWord of jieba_1.default.cut(word)) {";
    const koCheck = String.raw`if (/\p{Script=Hangul}/u.test(word[0])) { tokens.push(new lunr_1.default.Token(word, Object.assign(Object.assign({}, lunr_1.default.utils.clone(metadata)), { position: [start, word.length], index: tokens.length }))); start += word.length; } else `;
    if (content.includes(oldJieba) && !content.includes("Script=Hangul")) {
      content = content.replace(oldJieba, koCheck + oldJieba);
      changed = true;
    }

    if (changed) {
      fs.writeFileSync("'"$SERVER_TOKENIZER"'", content);
      console.log("[patch] Server tokenizer patched");
    } else {
      console.log("[patch] Server tokenizer already patched or pattern not found");
    }
  '
else
  echo "[patch] WARNING: Server tokenizer not found at $SERVER_TOKENIZER"
fi

# 2. Client-side tokenizer: add Hangul to regex
CLIENT_TOKENIZER="$PLUGIN_DIR/client/client/utils/tokenize.js"
if [ -f "$CLIENT_TOKENIZER" ]; then
  node -e '
    const fs = require("fs");
    let content = fs.readFileSync("'"$CLIENT_TOKENIZER"'", "utf8");

    // Add Hangul to the zh-specific regex
    const oldRegex = String.raw`/\w+|\p{Unified_Ideograph}+/gu`;
    const newRegex = String.raw`/\w+|\p{Unified_Ideograph}+|\p{Script=Hangul}+/gu`;
    if (content.includes(oldRegex)) {
      content = content.replace(oldRegex, newRegex);
      fs.writeFileSync("'"$CLIENT_TOKENIZER"'", content);
      console.log("[patch] Client tokenizer patched");
    } else {
      console.log("[patch] Client tokenizer already patched or pattern not found");
    }
  '
else
  echo "[patch] WARNING: Client tokenizer not found at $CLIENT_TOKENIZER"
fi

# 3. Client-side smartTerms: handle Korean tokens (don't use zhDictionary)
CLIENT_SMART="$PLUGIN_DIR/client/client/utils/smartTerms.js"
if [ -f "$CLIENT_SMART" ]; then
  node -e '
    const fs = require("fs");
    let content = fs.readFileSync("'"$CLIENT_SMART"'", "utf8");

    // Add Korean check: Korean tokens should be treated as simple terms, not cut by zhDictionary
    const oldCheck = String.raw`if (/\p{Unified_Ideograph}/u.test(token)) {`;
    const newCheck = String.raw`if (/\p{Script=Hangul}/u.test(token)) { return [{ value: token }]; } else if (/\p{Unified_Ideograph}/u.test(token)) {`;
    if (content.includes(oldCheck) && !content.includes("Script=Hangul")) {
      content = content.replace(oldCheck, newCheck);
      fs.writeFileSync("'"$CLIENT_SMART"'", content);
      console.log("[patch] Client smartTerms patched");
    } else {
      console.log("[patch] Client smartTerms already patched or pattern not found");
    }
  '
else
  echo "[patch] WARNING: Client smartTerms not found at $CLIENT_SMART"
fi

# 4. Server lunrLanguageZh: add Hangul ranges to wordCharacters so trimmer doesn't strip them
LUNR_ZH="$PLUGIN_DIR/server/shared/lunrLanguageZh.js"
if [ -f "$LUNR_ZH" ]; then
  node -e '
    const fs = require("fs");
    let content = fs.readFileSync("'"$LUNR_ZH"'", "utf8");

    // Add Hangul Syllables range (U+AC00-U+D7AF) and Hangul Jamo (U+1100-U+11FF)
    // to wordCharacters so the trimmer doesn't strip Korean
    // File contains literal \\u3400 (double backslash)
    const oldStr = String.raw`"\\u3400-\\u4DBF`;
    const newStr = String.raw`"\\uAC00-\\uD7AF\\u1100-\\u11FF\\u3130-\\u318F\\u3400-\\u4DBF`;
    if (content.includes(oldStr)) {
      content = content.replace(oldStr, newStr);
      fs.writeFileSync("'"$LUNR_ZH"'", content);
      console.log("[patch] lunrLanguageZh patched");
    } else if (content.includes(String.raw`\\uAC00`)) {
      console.log("[patch] lunrLanguageZh already patched");
    } else {
      console.log("[patch] WARNING: Could not find target string in lunrLanguageZh");
    }
  '
else
  echo "[patch] WARNING: lunrLanguageZh not found at $LUNR_ZH"
fi

echo "[patch] Korean search support patching complete!"
