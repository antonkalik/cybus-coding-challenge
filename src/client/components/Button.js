import React from 'react';
import { BlinkSymbol } from '.';

export default function Button({ text, onClick, loading }) {
  return (
    <button className={`button${loading ? ' loading' : ''}`} onClick={onClick}>
      {loading ? (
        <>
          loading
          <BlinkSymbol symbol="." />
        </>
      ) : (
        text
      )}
    </button>
  );
}
