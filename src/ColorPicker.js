import React, { useState } from 'react';

function ColorPicker() {
    const [colors, setColors] = useState([]);

    const addColor = (color) => {
        setColors([...colors, color]);
    };

    const savePalette = () => {
        localStorage.setItem('colorPalette', JSON.stringify(colors));
        alert('Palette saved!');
    };

    return (
        <div className="color-picker">
            <input type="color" onChange={(e) => addColor(e.target.value)} />
            <button onClick={savePalette}>Save Palette</button>
            <div className="palette">
                {colors.map((color, index) => (
                    <div key={index} className="color-swatch" style={{ backgroundColor: color }}></div>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;