// console.log('hello');
// console.log('live reload works');

function greet({
    name,
    address,
    // occupation,
    }) {
    // const {name} = whom;
    return `Hello, ${name}, where are you from? ${address}`;
};

// console.log(greet('travis'));

const person = {
    name: 'Greta',
    // address: ,
    occupation: 'hero',
    age: '14'
};

function fromEarth (somebody) {
    somebody.address='earth';
    return somebody;
}

// const person2 = {
//     name: 'Travis'
// };

console.log(greet(fromEarth(person)));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
