// NewBoxForm.js
import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      id: Date.now(),
      width,
      height,
      backgroundColor,
    };
    addBox(newBox);
    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="text"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Background Color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;