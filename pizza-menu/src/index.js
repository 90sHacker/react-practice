import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Menu from "./components/Menu";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />;
      <Menu />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
