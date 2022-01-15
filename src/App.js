import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import Navbar from "./navbar";
import Content from "./content";
function App() {
  return (
    <div className="App bg-bgBody w-full h-screen ">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
