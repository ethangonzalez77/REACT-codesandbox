import { useState } from "react";
import "./styles2.css";

const initialItems = [//dont nned this anymore now that we got state
  //we are gunna render this list in our ui
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tooth brush", quantity: 12, packed: true },
];

//🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔your trying to do math stuff with the stats
//we wanna display the number of items the users enters. 
//So we already got a peice of state that contains the list of items a user enters. 
//So we can use this already exsisting state and do calculations on it.
//So we are gunna have to pass that array list that holds the users items to the component that is gunna do math stuff with it.
// so that it can display it on the UI

export default function App2() {

  const [itemListArr, setItemListArr] = useState([]);

  function handlerAddItem(itemZ) {
    setItemListArr((iLA) => [...iLA, itemZ]);
  }

  function handlerCheckBox(checkedBoxId) {
    

    setItemListArr((itemListArr) =>
    itemListArr.map((item) =>
      item.id === checkedBoxId
        ? { ...item, packed: !item.packed } //🕵️‍♀️ look more into
        : item
    )
  ); 

  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handlerAddItem}/>
      <PackingList itemListArr={itemListArr} onCheckBox={handlerCheckBox}/>
      <Stats itemListArr={itemListArr}/>
    </div>
  );
}

function Logo() {
  return <h1> 🏝️Far way 💼</h1>;
}

function Form({onAddItem}) {
  const [desc, setDesc] = useState("TESTING.......");
  const [selectNum, setSelectNum] = useState(1);
 

    function handlerSubmitted(e) {
        e.preventDefault();
        // console.log(e);
        setDesc("TESTING.......");
        setSelectNum(1)

        // const itemListObj = { id: Date.now(), description: 1, quantity:1, packed: false };
        const newItem = { desc, selectNum, packed: false, id: Date.now() };

        // console.log(itemListObj);

        onAddItem(newItem);
    }

    function handlerDescription(e) {
      setDesc(e.target.value);
    }

    function handlerSelectNum(e) {
      // Number(setSelectNum(e.target.value));
      setSelectNum(Number(e.target.value));
    }
  

    return (
        <form className="add-form" onSubmit={handlerSubmitted}>
          <h3>What do you need for your trip?</h3>
          <select value={selectNum} onChange={handlerSelectNum}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(
              (num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              )
            )}
          </select>
          <input type="text" 
            placeholder="Item..." 
            value={desc} 
            onChange={handlerDescription}/>
          <button>Add</button>
        </form>
      );
}

function PackingList({itemListArr, onCheckBox}) {
  return (
    <div className="list">
      <ul>
        {itemListArr.map((item) => (
          <Item item={item} key={item.id} onCheckBox={onCheckBox}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onCheckBox }) {
  //should be <li> cuz thats what direct child components of the <ul> should be



  return (
    <li>
      <input 
        type="checkbox"
        value={item.packed}
        onChange={()=>onCheckBox(item.id)}
        
        >
        </input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/* 😅😅😅😅😅was having major issues cuz the props was selcting the wrong properties in the object😅😅😅 */}
        {item.selectNum} {item.desc}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats({itemListArr}) {

  const totalItems = itemListArr.length;//created a derived state.

  return (
    <footer className="stats">
      <em>💼 you have {totalItems} items on your list, and you already packed X (X%)</em>
    </footer>
  );
}