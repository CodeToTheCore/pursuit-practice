import React, {useState, useEffect, useContext} from 'react';
 
import AppContext from './Context';

function Counter() {
    const { state, dispatch} = useContext(AppContext);
    console.log("Counter component is rendering");
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }
   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    console.log('Effect is running, count is:', count);
    document.title = `You clicked ${count} times`;
});

    return (
        <div>
            <h2>Count: {count}</h2>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Counter;