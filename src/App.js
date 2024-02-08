import React from 'react';
import './App.css';
import Theheader from './component/Theheader';
import UseStat from './component/UseStat';
import Form from './component/Form';
import Todo from './component/Todo';
import Game from './component/Game';
import Guessed from './component/Guessed';

function App() {
  return (
    <>
      <Theheader />
      {/* <UseStat/> */}
      {/* <Form /> */}
      {/* <Todo /> */}
      {/* <Game /> */}
      <Guessed />
    </>
  );
}

export default App;
