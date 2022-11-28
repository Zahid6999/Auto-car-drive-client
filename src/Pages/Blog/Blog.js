import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='text-center mt-8 mb-8'>

            <h2 className='text-6xl text-lime-400 font-semibold my-6'>Question Answer</h2>

            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-2xl lg:text-4xl font-medium text-cyan-800  pb-9'> What are the different ways to manage a state in a React application?</h2>
                <p className=' text-xs lg:text-xl font-medium text-cyan-400 p-4'>In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.

                    The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.

                    The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.

                    But thanks to state, React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.</p>
            </div>




            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-2xl lg:text-4xl font-medium text-cyan-800  pb-9'>How does prototypical inheritance work?</h2>
                <p className='text-xs lg:text-xl font-medium text-cyan-400 p-4'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>





            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-2xl lg:text-4xl font-medium text-cyan-800  pb-9'> What is a unit test? Why should we write unit tests?</h2>
                <p className='text-xs lg:text-xl font-medium text-cyan-400 p-4'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>




        </div>

    );
};

export default Blog;