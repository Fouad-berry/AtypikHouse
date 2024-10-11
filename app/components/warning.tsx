"use client";
import React from 'react';

interface WarningProps {
  onDismiss: () => void;
}

const Warning: React.FC<WarningProps> = ({ onDismiss }) => {
  return (
    <div className="bg-yellow-200 text-black p-4 text-center">
      <span>
        Ce site est une démonstration pour test - aucune commande ne sera honorée.
      </span>
      <button
        onClick={onDismiss}
        className="text-black font-bold hover:underline focus:outline-none"
      >
        &emsp;Ignorer
      </button>
    </div>
  );
};

export default Warning;
