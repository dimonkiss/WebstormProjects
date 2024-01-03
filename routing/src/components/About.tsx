import React from 'react';

const About = () => {
    return (
        <div>
            <h2>Difference between Functional and Class Components</h2>
            <p>
                React components are the building blocks of a React application. There are two main types
                of components: functional components and class components. Below, we'll explore the key
                differences between these two types of components.
            </p>

            <h3>1. Syntax:</h3>
            <p>
                <strong>Functional Components:</strong> Functional components are JavaScript functions
                that take props as arguments and return React elements. They are concise and easy to read.
            </p>
            <p>
                <strong>Class Components:</strong> Class components are ES6 classes that extend
                `React.Component`. They use the `render` method to return React elements. Class components
                require more boilerplate code.
            </p>

            <h3>2. State Management:</h3>
            <p>
                <strong>Functional Components:</strong> Initially, functional components were stateless,
                but with the introduction of hooks in React 16.8, functional components can now use hooks
                like `useState` to manage state.
            </p>
            <p>
                <strong>Class Components:</strong> Class components can manage local state using
                `this.state` and `this.setState` methods.
            </p>

            <h3>3. Lifecycle Methods:</h3>
            <p>
                <strong>Functional Components:</strong> Before hooks, functional components didn't have
                access to lifecycle methods. With hooks, functions like `useEffect` can be used for
                lifecycle-related tasks.
            </p>
            <p>
                <strong>Class Components:</strong> Class components have lifecycle methods such as
                `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for managing side
                effects.
            </p>

            <h3>4. Readability and Conciseness:</h3>
            <p>
                <strong>Functional Components:</strong> Generally considered more concise and readable.
            </p>
            <p>
                <strong>Class Components:</strong> May require more boilerplate code, making them longer
                and potentially less readable.
            </p>
        </div>
    );
};

export default About;