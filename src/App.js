import React from 'react';
import ItemsList from './components/ItemsList'
import Input from './components/Input'
import Button from './components/Button'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="addSection">
        <Input />
        <Button />
      </div>
      <div className="itemsLists">
       <ItemsList />
       <ItemsList />
      </div>
    </div>
  );
}

export default App;
