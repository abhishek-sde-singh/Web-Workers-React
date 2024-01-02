import React, { useState } from "react";
import worker from "./worker.js";
import WebWorker from "./WebWorker";
const App = () => {
  const webWorker = new WebWorker(worker);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  const handle = () => {
    /*
    let add = 0;
    for (let i = 0; i < 5000000000; i++) {
      add += i;
    }
    setSum(add);
    */
    webWorker.postMessage("do the add");
    webWorker.onmessage = (event) => {
      console.log("i am back in main thread with data", event.data);
      setSum(event.data);
      webWorker.terminate();
    };
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count : {count}
      </button>
      <br />
      <br />
      <br />
      <button onClick={handle}>Sum : {sum}</button>
    </div>
  );
};

export default App;
