import React from 'react';

const Alert = ({ message, type, children }) => {
  return (
    <div
      className={`${
        type === 'error'
          ? 'bg-red-200 text-red-700'
          : type === 'success'
          ? 'bg-green-100 text-green-800'
          : type === 'warning'
          ? 'bg-yellow-200 text-yellow-800'
          : 'bg-blue-300 text-blue-800'
      } py-4 px-3 rounded-sm `}>
      <p className={`font-bold uppercase tracking-wider text-sm rounded-sm`}>
        {message}
      </p>
      {children}
    </div>
  );
};

export default Alert;
