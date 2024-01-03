import React from 'react';
import vanGoghImage from './images/download.jpg';
const Home = () => {
    return (
        <div>
            <img src={vanGoghImage} alt="Vincent van Gogh" style={{maxWidth: '100%'}}/>

            <h2>Biography of Vincent van Gogh</h2>
            <p>
                Vincent van Gogh (1853-1890) was a Dutch post-impressionist painter who is among the most
                famous and influential figures in the history of Western art. In a career that spanned only
                a decade, he created more than 2,000 artworks, including around 860 oil paintings.
            </p>

            <p>
                Van Gogh's work is known for its bold colors, emotional honesty, and rough beauty. He struggled
                with mental health issues throughout his life, and his art reflects his inner turmoil and
                passion for life. Despite facing numerous challenges, his artistic legacy has had a profound
                impact on the world of art.
            </p>

            <p>
                Some of his most famous works include "Starry Night," "Sunflowers," and "The Bedroom." Van Gogh's
                unique style and use of color continue to inspire artists and art enthusiasts around the globe.
            </p>

            <p>
                Although he struggled with mental health and poverty during his lifetime, Vincent van Gogh's
                posthumous fame has elevated him to the status of an iconic figure in the art world.
            </p>
        </div>
    );
};

export default Home;