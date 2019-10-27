import React from 'react';

export default function Input({ value, onChange }) {
  return <input onChange={onChange} value={value} />;
}
