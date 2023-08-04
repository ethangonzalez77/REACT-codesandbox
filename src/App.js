import { useState } from "react";
import "./styles.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "That's it, what are you waiting for?..."
];

export default function App() {
  function handlerMsg() {
    console.log(
      "wuzz up react, adding an Event Listener the Superior way... the React Way..."
    );
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handlerMsg}>Click</button>
      <Sandbox />
    </div>
  );
}

//---------------------

//we want the button to change the state of the entire component, when the buttons are clicked.

//add event Listener to the button
//create state variable
//use state varibale in jsx CodeSandbox
//use setter function to change the state indirectly.

function Sandbox() {
  const [step, setStep] = useState(0);
  const [isOpenClose, setIsOpenClose] = useState(true);

  function handlerPrevious() {
    // alert("Previously on Avatar 🍃");
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function handlerNext() {
    if (step < 3) {
      setStep(step + 1);
    }else if(step === 3) {
      setStep(step + 1);
    }
  }

  // const step = 2;

  return (
    <>
  {
    <button onClick={() => setIsOpenClose(!isOpenClose) }>❌</button>
  }{
    isOpenClose &&
    <div className="steps">
      <div className="numbers">
        <div className={step > 0 ? "active" : ""}>1</div>
        <div className={step > 1 ? "active" : ""}>2</div>
        <div className={step > 2 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlerPrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlerNext}
        >
          Next
        </button>
      </div>
    </div>
}
    </>
  );
}
