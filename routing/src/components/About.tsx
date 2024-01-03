import React from 'react';
import starryNightImage from './images/download (1).jpg';
const About = () => {
    return (
        <div>
            <h2>About "Starry Night" by Vincent van Gogh</h2>
            <img src={starryNightImage} alt="Starry Night by Vincent van Gogh" style={{maxWidth: '100%'}}/>

            <p>
                "Starry Night" is one of the most famous paintings by Vincent van Gogh, created in 1889
                while he was a patient at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France.
                The painting is known for its swirling blue night sky punctuated by vibrant stars and a small
                village in the foreground.
            </p>

            <p>
                Van Gogh's use of bold colors, expressive brushstrokes, and the unique composition make
                "Starry Night" an iconic piece of art. The painting reflects van Gogh's emotional and
                psychological state during his turbulent times.
            </p>

            <p>
                Today, "Starry Night" is housed in the Museum of Modern Art in New York City and is considered
                a masterpiece that continues to captivate art lovers around the world.
            </p>
        </div>
    );
};

export default About;