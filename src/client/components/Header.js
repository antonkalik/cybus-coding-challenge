import React from 'react';

export default function Header({ items }) {
  return (
    <div className="header">
      {items.map(item => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
