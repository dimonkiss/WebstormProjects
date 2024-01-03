// PaintingDetail.jsx
import React from 'react';
import paint from "../images/download (1).jpg"
const FirstPaint = () => {




    return (
        <div>
            <h2>The Starry Night</h2>
            <img src={paint} alt="picture" style={{ maxWidth: '300px' }} />
            <p>One of van Gogh\'s most famous works, featuring a swirling night sky and a small village.</p>

        </div>
    );
};

export default FirstPaint;
