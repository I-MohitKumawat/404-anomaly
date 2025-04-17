import React from 'react';
import './EndlessFlow.css';

const sentences = [
  "Take a deep breath and smile.",
  "You are doing your best, and that's enough.",
  "Even the darkest night ends with sunrise.",
  "Progress is better than perfection.",
  "You matter more than you know.",
  "Small steps lead to big changes.",
  "Your feelings are valid.",
  "Rest is productive too.",
  "Kindness starts with yourself.",
  "You’ve survived 100% of your worst days.",
  "Take a deep breath and smile.",
  "You are doing your best, and that's enough.",
  "Even the darkest night ends with sunrise.",
  "Progress is better than perfection.",
  "You matter more than you know.",
  "Small steps lead to big changes.",
  "Your feelings are valid.",
  "Rest is productive too.",
  "Kindness starts with yourself.",
  "You’ve survived 100% of your worst days.",
];

export default function EndlessFlow() {
  return (
    <div className="vertical-ticker-container">
      <div className="vertical-ticker">
        {[...sentences, ...sentences].map((text, index) => (
          <div key={index} className="ticker-line">{text}</div>
        ))}
      </div>
    </div>
  );
}
