import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blogs">
            <h2>Read Blog</h2>
            <div className="blog">
                <h3>Q1. How does react work?</h3>
                <p>
                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces. The main concept of React. js is virtual DOM. <bold>React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</bold> In fancy words, React does batch updates.
                </p>
            </div>


            <div className="blog">
                <h3>Q2. Difference between props and state.</h3>
                <p>
                Both the props and the state decide what data the component will display. They are simple Javascript objects that will re-render the component every time they change. The main difference between props and state is: <bold>Props are used to pass data from one component to another, while the state is a local data storage that is local to the component only and cannot be passed to other components.</bold>
                </p>
            </div>


            <div className="blog">
                <h3>Q3. What are the usage of useEffect()?</h3>
                <p>
                By using useEffect Hook, it <bold>ells React that the component needs to do something after render.</bold> React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. We can use useEffect in many cases. Some are given below: <bold>1. fetch API data, 2. validating input field, 3. live filtering, 4. trigger animation on new array value, 5. update paragraph list on fetched API data update, etc.</bold>
                </p>
            </div>
            
        </div>
    );
};

export default Blog;