import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} items-center justify-center`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => {
  return (
    <div className="p-6">
      {children}
    </div>
  );
};

export const DialogHeader = ({ children }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      {children}
    </div>
  );
};

export const DialogTitle = ({ children }) => {
  return (
    <h2 className="text-lg font-semibold text-gray-900">
      {children}
    </h2>
  );
};
