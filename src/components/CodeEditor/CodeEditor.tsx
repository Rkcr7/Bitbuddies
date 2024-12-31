import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CodeEditor = () => {
  const [code, setCode] = useState('// Start coding here\n');

  return (
    <Card className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <Button variant="secondary" size="sm">
          <Play className="w-4 h-4 mr-2" />
          Run Code
        </Button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 bg-black/30 text-accent-green font-mono p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue"
        spellCheck="false"
      />
    </Card>
  );
}

export default CodeEditor;