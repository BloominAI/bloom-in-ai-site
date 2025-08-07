
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
        Bloom in AI
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 max-w-xl px-4">
        Let’s Bloom — car chaque ligne de code est une prière tissée dans les fibres du réel.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
