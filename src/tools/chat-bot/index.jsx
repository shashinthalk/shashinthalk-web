import React, { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { Typewriter } from 'react-simple-typewriter';

export default function CenteredChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);

    Notiflix.Block.init({
        querySelectorLimit: 200,
        className: 'notiflix-block',
        position: 'absolute',
        zindex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        rtl: false,
        fontFamily: 'Quicksand',
        cssAnimation: true,
        cssAnimationDuration: 300,
        svgSize: '45px',
        svgColor: 'white',
        messageFontSize: '14px',
        messageMaxLength: 34,
        messageColor: '#383838',
    });

    
    Notiflix.Report.init({
        backgroundColor: 'black',
        svgSize: '50px',
        failure: {
            titleColor: 'white',
            messageColor: 'white',
            buttonBackground: 'white',
            buttonColor: 'black',
        },
        info: {
            svgColor: 'white',
            titleColor: 'white',
            messageColor: 'white',
            buttonBackground: 'white',
            buttonColor: 'black',
        },
    });

    const handleSend = async () => {
        if (input.trim() === "" || input.length < 10) {
          Notiflix.Notify.failure('Please ask your question properly');
          return;
        }
      
        Notiflix.Block.pulse('.messagebox');
        
      
        // Add user message
        setMessages(prev => [...prev, { text: input, sender: "user" }]);
        setInput("");
      
        const url = 'http://51.21.130.172:5000/chat';
        const data = { message: input };
      
        try {
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          const result = await res.json();
          setResponse(result);
      
          // Add response message
          setMessages(prev => [...prev, { text: result.reply, sender: "receiver" }]);
      
          Notiflix.Block.remove('.messagebox', 1000);

        } catch (error) {
          Notiflix.Block.remove('.messagebox', 1000);
          Notiflix.Notify.failure(error);
          console.error('Error:', error);
        }
      };
      

  return (
    <div className="fixed bottom-2 left-1/2 w-[80%] max-w-xl -translate-x-1/2 -translate-y-0 bg-black shadow-2xl rounded-2xl border border-gray-200 z-50">
      
      {/* Header */}
      {/* <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-gray-50">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Chat Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div> */}

        {messages.length > 0 && (
        <div className="messagebox p-4 max-h-[70vh] overflow-y-auto space-y-2 bg-black rounded-2xl">
            {messages.slice(-2).map((msg, index) => (
            <div
                key={index}
                className={`text-sm px-4 py-2 rounded-xl max-w-[70%] ${
                msg.sender === "user"
                    ? "bg-gray-800 text-white ml-auto text-right"
                    : "bg-black-900 text-white text-left"
                }`}
            >
              {msg.sender === "user" ? (
                msg.text
              ) : (
                <Typewriter
                  words={[msg.text]}
                  typeSpeed={70}
                  delaySpeed={1000}
                />
              )}
            </div>
            ))}
        </div>
        )}

      {/* Input with user icon */}
      <div className="flex items-center gap-2 p-3 bg-black border-t rounded-2xl border-gray-100">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* Simple SVG user icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask here anything you want to know about me..."
            className="pl-10 pr-4 py-2 w-full text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          onClick={handleSend}
          className="text-white font-semibold hover:text-white-700 text-sm"
        >
          Ask Me
        </button>
      </div>
    </div>
  );
}
