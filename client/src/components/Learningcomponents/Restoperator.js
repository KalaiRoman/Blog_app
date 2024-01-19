import React, { useEffect, useState } from 'react'

function Restoperator() {
    const [first, setirst] = useState([]);
    const firstFunction = (...id) => {
        setirst(id)
    }
    useEffect(() => {
        firstFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    }, []);

    const sortMethod = [5, 10, 2, 5, 1, 80, 56, 100, 1000, 34, 23, 19, 1];
    const sorts = new Set(sortMethod);
    return (
        <div className='ms-5 mt-3'>
            <h4>RestOperator</h4>
            <div>
                {first?.length}
            </div>

            {sorts?.map((item, index) => {
                return item;
            })}
        </div>
    )
}

export default Restoperator