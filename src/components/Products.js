// src/components/ProductPage.js
import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">Select Product Color</h1>
      <div className="flex space-x-4">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorClick(color)}
            className={`w-16 h-16 rounded-full cursor-pointer bg-${color}-500 ${
              selectedColor === color ? `ring-4 ring-${color}-500` : ''
            }`}
          ></div>
        ))}
      </div>
      {selectedColor && (
        <div className={`mt-6 p-6 rounded-lg bg-${selectedColor}-100 border border-${selectedColor}-500`}>
          <h2 className="text-2xl">Selected Color: {selectedColor}</h2>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
