import React from "react";

//Destructure list and set items
const List = ({ lists, setLists, setEditList }) => {
    const handleComplete = (list) => {
      setLists(
        lists.map((item) => {
          if (item.id === list.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      );
    };

    const handleEdit = ({ id }) => {
      const findList = lists.find((list) => list.id === id);
      setEditList(findList);
    };

    const handleDelete = ({ id }) => {
      setLists(lists.filter((list) => list.id !== id));
    };

    return (
      <div>
        {lists.map((list) => (
          <li className="list-item" key={list.id}>
            <input
              type="text"
              value={list.title}
              className={`list ${list.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button
                className="btn-complete task-button"
                onClick={() => handleComplete(list)}
              >
                <i className="fa fa-check-circle"></i>
              </button>

              <button
                className="btn-edit task-button"
                onClick={() => handleEdit(list)}
              >
                <i className="fa fa-edit"></i>
              </button>

              <button
                className="btn-delete task-button"
                onClick={() => handleDelete(list)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </div>
    );
  };

export default List;
