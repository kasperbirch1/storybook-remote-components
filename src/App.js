import RemoteComponentContainer from "./components/RemoteComponentContainer";

function App() {
  return (
    <div className="App">
      App:
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <RemoteComponentContainer />
      </div>
    </div>
  );
}

export default App;
