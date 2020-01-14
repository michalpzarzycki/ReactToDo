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
  
  const handleChange = (e) => {
    console.log("e", e)
    setItem(e.target.value)
  }
  const handleSelectChange = (e) => {
    console.log("e", e)
    setValue(e.target.value)
  }
  const handleDateChange = (date) => {
    console.log("e", date.toString())
    setDeadline(date.toString())
  }
  const handleSubmit = (e) => {
    console.log("VALUE W SUBMICIE: ", value)
    console.log("DEADLINE W SUBMICIE", deadline)
    e.preventDefault();
    setDate( new Date().toLocaleString())

    console.log("DEADLINE:w subic", deadline)


    const newItem = {
      item: item,
      id: id,
      date: date,
      value: value,
      deadline: deadline.toLocaleString().toString()
    }

    console.log(newItem)
    if (newItem.item) {

      const updatedItems = [...items, newItem]
setItems(updatedItems);
setItem("");
setDate(new Date().toLocaleString());
setValue("1");
setDeadline(new Date())
     
    }
  }
  const deleteAllList = () => {
    setItems([])
  }
  const itemDelete = (id) => {
    let deletedItem = items.filter(item => (item.id == id))
    console.log("DELETED ITEM: ", deletedItem)

    const filteredItems = items.filter(item => (item.id !== id))
    setItems(filteredItems)
  }
  return (
    <div className="App">
      <div className="addSection">
       <AddItem item={item} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>
      <div className="itemsLists">
       <ItemsList />
       <ItemsList />
      </div>
    </div>
  );
}

export default App;
