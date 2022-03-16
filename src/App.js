import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      App:
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <HelloWorld name="From app.js" />
      </div>
    </div>
  );
}

export default App;
