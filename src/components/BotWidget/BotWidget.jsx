import React from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import "./BotWidget.css";

const botMessages = [
  { text: "Hi there 👋", type: "bot" },
  { text: "Need a modern portfolio?", type: "bot" },
  { text: "Let's build something great!", type: "user" },
];

function BotWidget() {
  return (
    <div className="bot-widget" aria-label="AI assistant widget">
      <div className="bot-chat-panel">
        <div className="bot-header">
          <span className="bot-status-dot" />
          <span className="bot-status-text">AI Assistant</span>
        </div>

        <div className="bot-message-stack">
          {botMessages.map((message, index) => (
            <div
              key={`${message.text}-${index}`}
              className={`bot-message ${message.type}`}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              {message.text}
            </div>
          ))}
        </div>

        <a href="mailto:samuvelanbudavids@gmail.com" className="bot-action" target="_blank" rel="noreferrer">
          <FaPaperPlane />
          Chat now
        </a>
      </div>

      <button type="button" className="bot-launcher" aria-label="Open AI assistant">
        <span className="bot-glow" />
        <span className="bot-icon-wrap">
          <FaRobot />
        </span>
        <span className="bot-title">AI Bot</span>
      </button>
    </div>
  );
}

export default BotWidget;
