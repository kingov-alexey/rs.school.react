import React from 'react';
import './App.css';

// GREET
const Greet0 = () => (
  <div>
    <h1>Hello! My name Korolev Alexey</h1>
    <span>Skills: Base HTML, Base CSS, Base JS, Base Git, Base React, Base React Native</span>
    <span>
      follow me: github{' '}
      <a href="https://github.com/kingov-alexey" target="_blank">
        @kingov-alexey
      </a>{' '}
      code wars
    </span>
    <span></span>
  </div>
);
// GREET

//TASK_1_REACT_GAME
const Task1ReactGame = () => <h1>Task 1 React Game</h1>;
//TASK_1_REACT_GAME

//TASK_2_Travel_App
const Task2TravelApp = () => <h1>Task 2 Travel App</h1>;
//TASK_2_Travel_App

//TASK_3_RS_Lang
const Task3RSLang = () => <h1>Task 3 RS Lang</h1>;
//TASK_3_RS_Lang

// CODE_WARS
const CodeWars = () => <Greet />;

//// Task_1
const Hello = () => <h1>Hello</h1>;

const World = () => <h2>World!</h2>;

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}
//// Task_1
//CODE_WARS

function App() {
  return (
    <div className="App">
      <Greet0 />
      <Task1ReactGame />
      <Task2TravelApp />
      <Task3RSLang />
      <CodeWars />
    </div>
  );
}

export default App;
