import React from "react";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <UsersList />
        <Messages />
      </main>
    </div>
  );
}

export default App;
