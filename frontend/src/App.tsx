import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard /> {/* Render the Dashboard component */}
    </div>
  );
};

export default App;
