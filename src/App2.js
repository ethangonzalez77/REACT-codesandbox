import { useState } from "react";
import "./styles2.css";

const initialItems = [//dont nned this anymore now that we got state
  //we are gunna render this list in our ui
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tooth brush", quantity: 12, packed: true },
];

export default function App2() {

  const [itemListArr, setItemListArr] = useState([]);

  function handlerAddItem(itemZ) {
    setItemListArr((iLA) => [...iLA, itemZ]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handlerAddItem}/>
      <PackingList itemListArr={itemListArr}/>
      <Stats />
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

function PackingList({itemListArr}) {
  return (
    <div className="list">
      <ul>
        {itemListArr.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  //should be <li> cuz thats what direct child components of the <ul> should be
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {/* 😅😅😅😅😅was having major issues cuz the props was selcting the wrong properties in the object😅😅😅 */}
        {item.selectNum} {item.desc}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}