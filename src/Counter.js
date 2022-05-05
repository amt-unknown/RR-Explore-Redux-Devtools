import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByFive, increment, incrementByAmount, incrementByFive } from './features/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button
                aria-label="Increment value by 5"
                onClick={(e) => dispatch(incrementByFive())}>   
                Increment By 5
            </button>
            <button
                aria-label="Decrement value by -5"
                onClick={(e) => dispatch(decrementByFive())}>   
                Decrement By 5
            </button>
            <form onSubmit={(e) => byAmount(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <br/>
        </div>
    )
}

export default Counter
