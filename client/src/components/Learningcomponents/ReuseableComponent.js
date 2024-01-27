import React, { useEffect, useState } from 'react'

function ReuseableComponent() {

    const [count, setCount] = useState(0);


    const datas = [1, 2, 3, 4, 5, 6, , 7, 8];

    useEffect(() => {
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0)
            setCount(count - 1);
    }
    return { count, increment, decrement, datas };
}

export default ReuseableComponent