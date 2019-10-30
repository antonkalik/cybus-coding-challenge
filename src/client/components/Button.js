import React from 'react';
import { BlinkSymbol } from '.';

export default function Button({ text, onClick, loading, name }) {
  return (
    <div className={`button${loading ? ' loading' : ''}`}>
      <button name={name} onClick={onClick}>
        {loading ? (
          <>
            loading
            <BlinkSymbol symbol="." />
          </>
        ) : (
          text
        )}
      </button>
    </div>
  );
}
