import React from 'react';
import { BlinkSymbol } from '.';

export default function Button({ text, onClick, loading }) {
  return (
    <div className={`button${loading ? ' loading' : ''}`}>
      <button onClick={onClick}>
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
