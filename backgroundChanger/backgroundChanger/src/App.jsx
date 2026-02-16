import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="h-screen w-full duration-1000"
        style={{ backgroundColor: color }}
      >
        <div>
          <button onClick={() => setColor("white")}>Default</button>
          <button onClick={() => setColor("black")}>Black</button>
          <button onClick={() => setColor("green")}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;
