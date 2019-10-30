import React from 'react';

export default function Input({ value, onChange, error, placeholder, pattern }) {
  return (
    <div className={`input${error ? ' error' : ''}`}>
      <input pattern={pattern} placeholder={placeholder} onChange={onChange} value={value} />
      {error && <p className="errorMessage">{error}</p>}
    </div>
  );
}
