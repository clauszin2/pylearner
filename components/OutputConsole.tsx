
import React from 'react';

interface OutputConsoleProps {
  output: string;
}

const OutputConsole: React.FC<OutputConsoleProps> = ({ output }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col flex-1 border border-gray-700">
      <div className="p-3 bg-gray-700/50 rounded-t-lg border-b border-gray-700">
        <h3 className="text-lg font-semibold text-gray-300">Console Output</h3>
      </div>
      <pre className="w-full h-full p-4 bg-[#1e1e1e] text-gray-200 font-mono text-sm whitespace-pre-wrap break-words overflow-auto rounded-b-lg">
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default OutputConsole;
