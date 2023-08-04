import "./styles.css";

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

function Sandbox() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">{/* Step {step} : {messages[step - 1]} */}</p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
