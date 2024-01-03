// PaintingDetail.jsx
import React from 'react';
import paint from "../images/download (3).jpg"
const ThirdPaint = () => {




    return (
        <div>
            <h2>Irises</h2>
            <img src={paint} alt="picture" style={{ maxWidth: '300px' }} />
            <p>Van Gogh\'s depiction of irises, known for its vibrant colors and bold brushstrokes.</p>

        </div>
    );
};

export default ThirdPaint;
