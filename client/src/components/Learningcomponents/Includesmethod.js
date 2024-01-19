import React from 'react'

function Includesmethod() {
    // only check array of methods
    // not check array of objects
    const data = [1, 2, 3, 4, 5, 6];
    const check = [5, 6, 7, 2];
    return (
        <div className='ms-5'>
            <h1 className='ms-4 mb-4'>Includes Method</h1>
            {data?.map((item) => {
                return (
                    <div>
                        {item}
                        {check.some((items) => items === item) ? <span className='ms-4'>Checked</span> : <span className='ms-2'>inCorrect</span>}
                    </div>
                )
            })}
        </div>
    )
}

export default Includesmethod