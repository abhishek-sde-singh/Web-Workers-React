export default () => {
  self.onmessage = (event) => {
    console.log("inside web worker", event.data);
    let add = 0;
    for (let i = 0; i < 5000000000; i++) {
      add += i;
    }
    postMessage(add);
  };
};



