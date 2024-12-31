import React from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({ code }: CodeSnippetProps) => {
  return (
    <div className="relative">
      <Card>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <pre className="text-sm md:text-base text-wrap auto">
          <code className="text-accent-green">{code}</code>
        </pre>
      </Card>
      <motion.div
        className="absolute -top-6 -right-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Terminal className="w-12 h-12 text-accent-blue" />
      </motion.div>
    </div>
  );
};

export default CodeSnippet;