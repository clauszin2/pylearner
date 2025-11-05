
import React from 'react';
import { PlayIcon } from './icons/PlayIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';

interface CodeEditorProps {
  code: string;
  onCodeChange: (newCode: string) => void;
  onRunCode: () => void;
  onExplainCode: () => void;
  isLoading: boolean;
  isPyodideLoading: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onCodeChange, onRunCode, onExplainCode, isLoading, isPyodideLoading }) => {
  const showOverlay = isLoading || isPyodideLoading;
  
  const getLoadingMessage = () => {
    if (isPyodideLoading) return "Caricamento interprete Python...";
    if (isLoading) return "Elaborazione in corso...";
    return "";
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col h-full border border-gray-700">
      <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-t-lg border-b border-gray-700">
        <h3 className="text-lg font-semibold text-gray-300">Editor Python</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onExplainCode}
            disabled={isLoading || isPyodideLoading}
            className="flex items-center gap-2 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 disabled:bg-yellow-800 disabled:cursor-not-allowed text-sm"
            title="Spiega questo codice (richiede API)"
          >
            <LightbulbIcon className="w-4 h-4" />
            Spiega
          </button>
          <button
            onClick={onRunCode}
            disabled={isLoading || isPyodideLoading}
            className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200 disabled:bg-green-800 disabled:cursor-not-allowed text-sm"
            title={isPyodideLoading ? "Interprete Python in caricamento..." : "Esegui il codice (locale)"}
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
          className="w-full h-full p-4 bg-[#1e1e1e] text-gray-200 font-mono text-sm resize-none border-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          placeholder="Scrivi il tuo codice Python qui..."
          spellCheck="false"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center rounded-b-lg">
             <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
              <span className="text-white mt-4">{getLoadingMessage()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
