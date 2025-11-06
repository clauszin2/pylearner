import React from 'react';

interface OutputConsoleProps {
  output: string;
}

const OutputConsole: React.FC<OutputConsoleProps> = ({ output }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg flex flex-col flex-1 border border-slate-700">
      <div className="p-3 bg-slate-800 rounded-t-lg border-b border-slate-700">
        <h3 className="text-lg font-semibold text-slate-300">Console Output</h3>
      </div>
      <pre className="w-full h-full p-4 bg-slate-900 text-slate-200 font-mono text-sm whitespace-pre-wrap break-words overflow-auto rounded-b-lg">
        <code>{output}</code>
      </pre>
    </div>
  );
};

export default OutputConsole;
