/**
 * Docusaurus Client Module
 * Renders the chatbot into the page
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chatbot } from './components/Chatbot';
import './styles/chatbot.css';

let root = null;
let currentRootElement = null;

function renderChatbot() {
  const rootElement = document.getElementById('chatbot-root');

  // If root element doesn't exist, clean up
  if (!rootElement) {
    if (root) {
      try {
        root.unmount();
      } catch (e) {
        console.warn('Failed to unmount chatbot root:', e);
      }
      root = null;
      currentRootElement = null;
    }
    return;
  }

  // If we have a root but the DOM element changed, clean up old root
  if (root && currentRootElement !== rootElement) {
    try {
      root.unmount();
    } catch (e) {
      console.warn('Failed to unmount old chatbot root:', e);
    }
    root = null;
    currentRootElement = null;
  }

  // Create and render if root doesn't exist
  if (!root) {
    root = createRoot(rootElement);
    currentRootElement = rootElement;
    root.render(<Chatbot />);
  }
}

// Render on route changes
export function onRouteDidUpdate() {
  renderChatbot();
}

// Initial render when client module loads
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderChatbot);
  } else {
    setTimeout(renderChatbot, 0);
  }

  // Watch for DOM mutations to handle edge cases where #chatbot-root is removed
  const observer = new MutationObserver(() => {
    const rootElement = document.getElementById('chatbot-root');

    // If root element exists but we don't have a root instance, render
    if (rootElement && !root) {
      renderChatbot();
    }
    // If we have a root but element is gone or changed, clean up
    else if (root && (!rootElement || currentRootElement !== rootElement)) {
      if (root) {
        try {
          root.unmount();
        } catch (e) {
          console.warn('Failed to unmount chatbot root:', e);
        }
        root = null;
        currentRootElement = null;
      }
      // If new element exists, render
      if (rootElement) {
        renderChatbot();
      }
    }
  });

  // Start observing after a short delay to let Docusaurus set up
  setTimeout(() => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }, 100);
}
