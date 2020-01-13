import React from 'react';
import ItemsList from './components/ItemsList'
import AddItem from './components/AddItem'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="addSection">
       <AddItem />
      </div>
      <div className="itemsLists">
       <ItemsList />
       <ItemsList />
      </div>
    </div>
  );
}

export default App;
