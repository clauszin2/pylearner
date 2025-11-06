import React from 'react';
import { PythonIcon } from './icons/PythonIcon';
import { MenuIcon } from './icons/MenuIcon';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center p-4 bg-slate-800 border-b border-slate-700 shadow-md relative z-20">
      <button 
        onClick={onMenuClick}
        className="md:hidden mr-4 p-2 rounded-md text-slate-400 hover:bg-slate-700 hover:text-white"
        aria-label="Apri menu lezioni"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="flex items-center">
        <PythonIcon className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold text-white tracking-wider">
          Py<span className="text-indigo-400">Learner</span>
        </h1>
      </div>
      <span className="ml-4 text-sm text-slate-400 hidden sm:inline">Impara Python con l'IA</span>
    </header>
  );
};

export default Header;
