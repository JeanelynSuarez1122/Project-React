import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterComponent from "./Counter";
import Display from "./Display";
import BoxContainer from "./BoxContainer";
import ButtonBox from "./ButtonBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Counter is now outside the main box */}
      <CounterComponent count={count} />

      {/* Main Box to Hold Display and Buttons */}
      <BoxContainer>
        <Display count={count} />

        {/* Small Box for Buttons */}
        <ButtonBox>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </ButtonBox>
      </BoxContainer>
    </>
  );
}

export default App;
