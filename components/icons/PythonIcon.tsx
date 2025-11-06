import React from 'react';

export const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path
      fill="currentColor"
      className="text-indigo-500"
      d="M15 21v-4.5a3.5 3.5 0 0 0-7 0V21"
    />
    <path
      stroke="currentColor"
      className="text-indigo-500"
      d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      fill="currentColor"
      className="text-yellow-400"
      d="M9 3v4.5a3.5 3.5 0 0 0 7 0V3"
    />
    <path
      stroke="currentColor"
      className="text-yellow-400"
      d="M12 12.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
    />
  </svg>
);
