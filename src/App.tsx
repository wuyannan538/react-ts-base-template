import React from "react";
import Hello from "./components/hello/Hello";
import Test from "./components/test/Test";
import "./styles/common.css";

const App: React.FC = () => (
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <Test />
  </div>
);

export default App;
