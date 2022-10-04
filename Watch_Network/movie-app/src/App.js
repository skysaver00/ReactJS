import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const iRunOlyOnce = () => {
    console.log("i run only once.");
  }
  useEffect(iRunOlyOnce, []);
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome Back!!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
