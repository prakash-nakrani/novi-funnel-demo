import React from 'react';

const Button = () => (
  <div className="w-full flex justify-center">
    <button className="w-full place-content-center bg-white text-novi-purple font-semibold py-3 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center gap-2">
      Next
      <span className="text-2xl">&rarr;</span>
    </button>
  </div>
);

export default Button;