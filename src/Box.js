// Box.js
import React from 'react';


function Box({ id, width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width,
    height,
    backgroundColor,
  };
  console.log(boxStyle);
  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div>
        <div 
            style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
            }}
        ></div>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;