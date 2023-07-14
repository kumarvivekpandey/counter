import './App.css';
import { useRef, useState } from "react";

function App() {
    const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value: number) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };
  return (
    <div className="App">
      <main className={styles.main}>
      <h2>{value}</h2>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div>
        <label htmlFor="step">Icrement/Decrement by</label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) =>
            setStep((e.target as HTMLInputElement).valueAsNumber)
          }
        />
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </main>
    </div>
  );
}

export default App;
