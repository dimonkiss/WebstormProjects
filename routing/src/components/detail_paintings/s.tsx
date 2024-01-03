// PaintingDetail.jsx
import React from 'react';
import paint from "../images/download (2).jpg"
const SecondPaint = () => {




    return (
        <div>
            <h2>Sunflowers</h2>
            <img src={paint} alt="picture" style={{ maxWidth: '300px' }} />
            <p>A series of still life paintings of sunflowers by Vincent van Gogh.</p>

        </div>
    );
};

export default SecondPaint;
