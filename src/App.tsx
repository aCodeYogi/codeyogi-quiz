import { useState } from "react";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5">
      <Button>Primary</Button>
      <Button theme="secondary">Secondary</Button>
    </div>
  );
}

export default App;

// npm - dependency managment tool
