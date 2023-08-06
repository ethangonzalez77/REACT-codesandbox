import { useState } from "react";
import "./styles2.css";

const initialItems = [//dont nned this anymore now that we got state
  //we are gunna render this list in our ui
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tooth brush", quantity: 12, packed: true },
];

//🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔your creating an options box to reorganize the users list
//first create the options box
//then use a peice of state for the controled Element
//get the options to change at least
//then make the box re-organize the list.

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

  function handlerClearAll() {

    const areYouSure = window.confirm("Are you sure about that???");

    areYouSure ? setItemListArr([]) : alert("Ok");

  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handlerAddItem}/>
      <PackingList itemListArr={itemListArr} onCheckBox={handlerCheckBox} onClearAll={handlerClearAll}/>
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

function PackingList({itemListArr, onCheckBox, onClearAll}) {

  const [selectOption, setSelectOption] = useState("z3");

  let reorganizedItemsList;

  if(selectOption === "z1") {
    reorganizedItemsList = itemListArr;
  }else if(selectOption === "z2") {
    reorganizedItemsList = itemListArr.slice()
    .sort((a, b) => a.desc.localeCompare(b.desc));
  }else if(selectOption === "z3") {
    reorganizedItemsList = itemListArr.slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <select 
        value={selectOption}
        onChange={(e) => {
          // alert(e.target.value);
          setSelectOption(e.target.value);
        }}
      >
        <option value='z1'>ZOOOOMBIEEEEHHHH</option>
        <option value='z2'>2</option>
        <option value='z3'>POTAOES</option>
      </select>
      <ul>
        {reorganizedItemsList.map((item) => (
          <Item item={item} key={item.id} onCheckBox={onCheckBox}/>
        ))}
      </ul>
      <button onClick={onClearAll}>Clear All?</button>
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



  if(totalItems === 0) {
    return <div className="stats">
      <p>Add Some Stuff 🤙</p>
    </div>
  }

  return (
    <footer className="stats">
      <em>💼 you have {totalItems} items on your list, and you already packed X (X%)</em>
    </footer>
  );
}