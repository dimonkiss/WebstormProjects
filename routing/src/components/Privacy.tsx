import React from 'react';

const Privacy = () => {
    return (
        <div>
            <h2>My Resume</h2>
            <p>
                I am a skilled and passionate React developer with expertise in building modern web
                applications. Below is a brief overview of my skills and experiences.
            </p>

            <h3>Skills:</h3>
            <ul>
                <li>React.js development</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 and CSS3</li>
                {/* Add more skills as needed */}
            </ul>

            <h3>Experience:</h3>
            <p>
                <strong>Company ABC - React Developer</strong>
            </p>
            <p>
                In my role at Company ABC, I played a key role in developing and maintaining React-based
                applications, ensuring high performance and responsiveness.
            </p>
            {/* Add more experiences as needed */}

            <h3>Education:</h3>
            <p>
                <strong>University XYZ - Bachelor's Degree in Computer Science</strong>
            </p>
            <p>
                I graduated with a solid foundation in computer science and a focus on web development.
            </p>
        </div>
    );
};

export default Privacy;