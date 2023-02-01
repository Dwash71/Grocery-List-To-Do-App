import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, lists, setLists, editList, setEditList }) => {
  const updateList = (title, id, completed) => {
    const newList = lists.map((list) =>
      list.id === id ? { title, id, completed } : list
    );
    setLists(newList);
    setEditList("");
  };

  // use useEffect
  useEffect(() => {
    if (editList) {
      setInput(editList.title);
    } else {
      setInput("");
    }
  }, [setInput, editList]);

  // Input Change function
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //form submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //check if not edit list
    if (!editList) {
      setLists([...lists, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateList(input, editList.id, editList.completed);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item"
          className="userInput"
          value={input}
          onChange={handleInputChange}
          required
        />
        {/* <button type='submit'>Add</button> */}
        <button className="btn-add" type="submit">
          {editList ? "OK" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Form;
