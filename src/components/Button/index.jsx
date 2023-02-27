import React from 'react';
import './_index.css';

function Button({ children, submit, copied }) {
  return (
    <button
      className={`btnUrl ${copied ? ' copied' : ''}`}
      type={submit ? 'submit' : 'button'}
      disabled={copied}
    >
      {children}
    </button>
  );
}

export default Button;
