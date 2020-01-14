import React, { useState } from 'react';
import ItemsList from './components/ItemsList'
import AddItem from './components/AddItem'
import './App.css';

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [value, setValue] = useState("1");
  const [deadline, setDeadline] = useState(new Date());
  const [color, setColoe] = useState("red");

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
