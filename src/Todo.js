import React, {useEffect, useState } from "react";
import todo2 from "./images/todo2.jpg";

const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
   
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
        return [];
    }
}

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalItems());
  

  function addItem() {
    if (!inputdata) {
    } else {
      setItems([...items, inputdata]);
      setInputdata("");
    }
  }
  function deleteItem(id) {
    console.log(id);
    const updatevalue = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatevalue);
  }
  const removeAll = () => {
    setItems([]);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo2} alt="todologo" />
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItem">
            <input
              type="text"
              placeholder="write here..."
              value={inputdata}
              onChange={(e) => setInputdata(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="add Items"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItems" key={ind}>
                  <h2>{elem}</h2>
                  <i
                    className="fa fa-trash add-btn"
                    title="Delete Items"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showitems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
