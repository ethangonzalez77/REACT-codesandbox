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
    </div>
  );
}
