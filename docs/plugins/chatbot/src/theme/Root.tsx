/**
 * Root theme component wrapper
 * Integrates chatbot into Docusaurus React tree
 */
import React from 'react';
import { Chatbot } from '../components/Chatbot';
import '../styles/chatbot.css';

// Root component that wraps the entire app
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}
