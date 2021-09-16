import './App.css';
import { useEffect, useRef } from "react";
// import { Counter } from "./Components/Counter";
import { Forms } from "./Components/Forms";


function App() {
  const ref = useRef();
  useEffect(() => {
    console.log(ref)
  })
    return (
    <div className="App">
        {/* <Counter /> */}
        <Forms/>
    </div>
  );
}

export default App;
