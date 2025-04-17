import React, { useEffect, useRef, useState } from 'react';
import './RightSide.css';

const RightSide = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const chatRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const chatLogRef = useRef([]);

  const questions = [
    "How are you feeling today on a scale of 1-5 (1: very bad, 5: very good)?",
    "How often have you felt stressed this week?",
    "Did you get enough sleep recently?",
    "How was your mood during study sessions?",
    "Did you feel overwhelmed with your tasks?",
    "Have you taken breaks and relaxed today?",
    "Did you talk to anyone about your feelings recently?",
    "How was your focus during your study time?",
    "Did you feel supported by friends or family?",
    "Anything else you'd like to share about your mental state?"
  ];

  useEffect(() => {
    setTimeout(() => {
      addMessage("Hi, I’m your wellness assistant! Ready to check in?", 'bot');
    }, 500);

    const clickListener = (e) => {
      chatLogRef.current.push({
        event: 'click',
        target: e.target.tagName,
        time: new Date().toISOString(),
      });
    };

    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);
  }, []);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage(input, 'user');
    chatLogRef.current.push({ role: 'user', text: input, timestamp: new Date().toISOString() });
    setInput('');

    setTimeout(() => {
      let reply;
      if (questionIndex < questions.length) {
        reply = questions[questionIndex];
        setQuestionIndex(prev => prev + 1);
      } else {
        reply = "Thanks for your answers! I'm calculating your wellness score.";
        calculateWellnessScore();
      }
      addMessage(reply, 'bot');
      chatLogRef.current.push({ role: 'bot', text: reply, timestamp: new Date().toISOString() });
    }, 500);
  };

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const calculateWellnessScore = () => {
    let score = 0;
    let count = 0;

    chatLogRef.current.forEach(entry => {
      if (entry.role === 'user') {
        const num = parseInt(entry.text);
        if (!isNaN(num)) {
          score += num;
          count++;
        }
      }
    });

    const avg = count ? (score / count).toFixed(2) : "Not enough numeric answers.";
    addMessage(`Wellness Score: ${avg}`, 'bot');

    const sessionTime = ((Date.now() - startTimeRef.current) / 1000).toFixed(1);
    console.log(`Session Time: ${sessionTime}s`);
    console.log('Full Log:', chatLogRef.current);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages" ref={chatRef}>
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender}>
            {msg.sender === 'user' ? 'You: ' : 'Bot: '}{msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default RightSide;
