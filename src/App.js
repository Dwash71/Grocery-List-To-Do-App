import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import "./App.css";

function App() {
  //store local into storage
  // const initialState = JSON.parse(localStorage.getItem("lists")) || [];

  //use state hooks and set state
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]); //empty array
  const [editList, setEditList] = useState(null);

  //apply useEffect
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const clearAll = () => {
    setLists([]);
  }

  return (
    <div className="form-container">
      <div className="form-group">
        <div>
          <Header />
          <h3 className="itemsLeft">{lists.length} Items left</h3>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            lists={lists}
            setLists={setLists}
            editList={editList}
            setEditList={setEditList}
          />
        </div>
        <div>
          <List lists={lists} setLists={setLists} setEditList={setEditList} clearAll={clearAll} />
        </div>
        <button className="clear" onClick={clearAll}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
