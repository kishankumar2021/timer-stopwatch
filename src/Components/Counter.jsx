import {  useRef, useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const timerRef = useRef();
    const [started, setStarted] = useState(false)

    // useEffect(() => {
    //     // startTimer();
    //     console.log(timerRef)
    // }, [])
   
    const startTimer = () => {
        if (started) {
            return;
        }
    
        // setStarted = (true);
        timerRef.current = setInterval(() => {
            setCounter((p) => p + 1);
        }, 500)
    };
    
  
    return(
    <>
        <h2>Counter: {counter}</h2>
            <button onClick={() => {
                setStarted(false);
                clearInterval(timerRef.current)
            }}>Pause</button>


            
            <button ref={timerRef} onClick={() => {
                startTimer();
            }}>Start</button>



            <button onClick={() => {
                setCounter(0);
                clearInterval(timerRef.current)
            }}>Reset</button>
        </>
    )
}