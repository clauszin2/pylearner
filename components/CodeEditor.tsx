import React from 'react';
import { PlayIcon } from './icons/PlayIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';

interface CodeEditorProps {
  code: string;
  onCodeChange: (newCode: string) => void;
  onRunCode: () => void;
  onExplainCode: () => void;
  isLoading: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onCodeChange, onRunCode, onExplainCode, isLoading }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg flex flex-col h-full border border-slate-700">
      <div className="flex justify-between items-center p-3 bg-slate-800 rounded-t-lg border-b border-slate-700">
        <h3 className="text-lg font-semibold text-slate-300">Editor Python</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onExplainCode}
            disabled={isLoading}
            className="flex items-center gap-2 bg-yellow-500/10 text-yellow-300 font-bold py-2 px-4 rounded-md hover:bg-yellow-500/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            title="Spiega questo codice"
          >
            <LightbulbIcon className="w-4 h-4" />
            Spiega
          </button>
          <button
            onClick={onRunCode}
            disabled={isLoading}
            className="flex items-center gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 disabled:bg-green-800 disabled:cursor-not-allowed text-sm"
            title="Esegui il codice"
          >
            <PlayIcon className="w-4 h-4" />
            Esegui Codice
          </button>
        </div>
      </div>
      <div className="relative flex-1">
        <textarea
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="w-full h-full p-4 bg-slate-900 text-slate-200 font-mono text-sm resize-none border-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
          placeholder="Scrivi il tuo codice Python qui..."
          spellCheck="false"
        />
        {isLoading && (
          <div className="absolute inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
