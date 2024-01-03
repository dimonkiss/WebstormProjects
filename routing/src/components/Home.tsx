import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Popular React Frameworks</h2>
            <p>Here are some of the most popular React frameworks:</p>
            <h3>1. Next.js</h3>
            <p>
                Next.js is a React framework that enables functionality such as server-side rendering
                and generating static websites for React-based web applications.
            </p>
            <h3>2. Gatsby</h3>
            <p>
                Gatsby is a static site generator for React that helps you build blazing-fast websites
                and apps by pre-rendering pages and serving them as static HTML, CSS, and JavaScript.
            </p>
            <h3>3. Redux</h3>
            <p>
                While not a framework itself, Redux is a popular state management library for React.
                It helps manage the state of your application in a predictable and centralized way.
            </p>
        </div>
    );
};

export default Home;