"use client";
import React from 'react';

interface WarningProps {
  onDismiss: () => void;
}

const Warning: React.FC<WarningProps> = ({ onDismiss }) => {
  return (
    <div className="bg-yellow-200 text-yellow-800 p-4 flex justify-between items-center">
      <span>
        Ce site est une démonstration pour test, aucune commande ne sera honorée.
      </span>
      <button
        onClick={onDismiss}
        className="text-yellow-800 font-bold hover:underline focus:outline-none"
      >
        Ignorer
      </button>
    </div>
  );
};

export default Warning;
