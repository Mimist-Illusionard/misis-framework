import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    function increase() {
        if (count > 100) return
        setCount(count + step)
    }

    function decrease() {
        if (count <= 0) return
        setCount(count - step)
    }

    function increaseStep() {
        setStep(step + 1)
    }

    function decreaseStep() {
        setStep(step - 1)
    }

    function reset() {
        setCount(0)
        setStep(1)
    }

    return (
        <>
            <h1>Counter</h1>
            { count > 50 && <p>High value !</p>}
            { count == 0 && <p>Counter is empty</p>}
            { count != 0 && count <= 50 && <h2>{count}</h2>}

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={increaseStep}>Increase step</button>
            <button onClick={decreaseStep}>Decrease step</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default App
