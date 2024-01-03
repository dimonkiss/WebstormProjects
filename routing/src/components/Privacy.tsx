// Privacy.jsx
import React from 'react';
import starryNightImage from './images/download (1).jpg';
import sunflowers from './images/download (2).jpg';
import irises from './images/download (3).jpg';
import {Link} from "react-router-dom";
const Privacy = () => {

    return (
        <div>
            <h2>Vincent van Gogh's Painting Collection</h2>

            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <h3>The Starry Night</h3>
                    </td>
                    <td>
                        <img src={starryNightImage} alt="picture"/>
                    </td>
                    <td>
                        <Link to={`/painting/tss`}>View</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Sunflowers</h3>
                    </td>
                    <td>
                        <img src={sunflowers} alt="picture"/>
                    </td>
                    <td>
                        <Link to={`/painting/s`}>View</Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Irises</h3>
                    </td>
                    <td>
                        <img src={irises} alt="picture"/>
                    </td>
                    <td>
                        <Link to={`/painting/i`}>View</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Privacy;
