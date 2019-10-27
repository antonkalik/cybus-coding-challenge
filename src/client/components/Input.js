import React from 'react';

export default function Input({ value, onChange, error, placeholder }) {
  return (
    <div className={`input${error ? ' error' : ''}`}>
      <input placeholder={placeholder} onChange={onChange} value={value} />
      {error && <p className="errorMessage">{error}</p>}
    </div>
  );
}
