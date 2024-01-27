import React from 'react'
import ReuseableComponent from './ReuseableComponent'

function GetComponentValues() {
    const { count, increment, decrement, datas } = ReuseableComponent();
    return (
        <div>GetComponentValues
            <div>
                <span>Count : {count}</span>
            </div>
            <div>
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>
                {datas?.map((item) => item)}
            </div>
        </div>
    )
}

export default GetComponentValues