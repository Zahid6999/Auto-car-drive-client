import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='text-center mt-8 mb-8'>

            <h2 className='text-6xl text-lime-400 font-semibold my-6'>Question Answer</h2>

            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>What is the purpose of react router?</h2>
                <p className='text-xl font-medium text-cyan-400'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. <br /> When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, <br /> the user will be redirected to that particular route.</p>
            </div>




            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>How does context api work?</h2>
                <p className='text-xl font-medium text-cyan-400'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br /> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />
                    Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>





            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>What is useref in react?</h2>
                <p className='text-xl font-medium text-cyan-400'>useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates. If the current render is the result of an urgent update, <br /> like user input, React will return the previous value and then render the new value after the urgent render has completed.

                    This hook is similar to user-space hooks <br /> which use debouncing or throttling to defer updates. The benefits to using useDeferredValue is that React will work on the update as soon as other work finishes instead of waiting for an arbitrary <br /> amount of time, and like startTransition, deferred values can suspend without triggering an unexpected fallback for existing content.</p>
            </div>




        </div>

    );
};

export default Blog;