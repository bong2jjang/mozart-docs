/**
 * Docusaurus Client Module
 * Renders the chatbot into the page
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Chatbot } from './components/Chatbot';
import './styles/chatbot.css';

let root = null;

function renderChatbot() {
  const rootElement = document.getElementById('chatbot-root');

  if (rootElement) {
    if (!root) {
      root = createRoot(rootElement);
    }
    root.render(<Chatbot />);
  }
}

// Render on initial page load
export function onRouteDidUpdate() {
  renderChatbot();
}

// Also render when client module loads
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderChatbot);
  } else {
    // DOM is already ready
    setTimeout(renderChatbot, 0);
  }
}
