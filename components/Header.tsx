
import React from 'react';
import { PythonIcon } from './icons/PythonIcon';

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-4 bg-gray-800 border-b border-gray-700 shadow-md">
      <PythonIcon className="w-8 h-8 mr-3 text-yellow-400" />
      <h1 className="text-2xl font-bold text-white tracking-wider">
        Py<span className="text-blue-400">Learner</span>
      </h1>
      <span className="ml-3 text-sm text-gray-400 hidden sm:inline">Impara Python con l'IA</span>
    </header>
  );
};

export default Header;
