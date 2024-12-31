import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  commands?: string[];
  autoType?: boolean;
  className?: string;
}

const Terminal = ({ commands = [], autoType = true, className = '' }: TerminalProps) => {
  const [currentLine, setCurrentLine] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    if (autoType && commands[currentCommand]) {
      const text = commands[currentCommand];
      let index = 0;

      const interval = setInterval(() => {
        if (index <= text.length) {
          setCurrentLine(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setHistory(prev => [...prev, text]);
          setCurrentLine('');
          setCurrentCommand(prev => prev + 1);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentCommand, commands, autoType]);

  return (
    <div className={`bg-black/80 rounded-lg p-4 font-mono text-sm ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <TerminalIcon className="w-4 h-4 text-gray-400" />
      </div>
      <div className="space-y-2">
        {history.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-accent-green mr-2">$</span>
            <span className="text-gray-300">{line}</span>
          </div>
        ))}
        <div className="flex">
          <span className="text-accent-green mr-2">$</span>
          <span className="text-gray-300">{currentLine}</span>
          <span className="animate-pulse ml-1">▊</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;