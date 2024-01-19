import React from 'react'

function Maxnumbercheck() {


    // min and max value check logic

    
    const datas = [1, 200, 3000, 5000, 10000, 400000, 560000];
    const values = [
        {
            id: 1,
            price: "300"
        },
        {
            id: 2,
            price: "500"
        },
        {
            id: 3,
            price: "4560"
        },
        {
            id: 4,
            price: "6780"
        },
        {
            id: 5,
            price: "30"
        },
    ]
    const maxNumber = Math.max(...datas?.map((items) => items));
    const minNumber = Math.min(...datas?.map((items) => items));

    const anotherMax = Math.max(...values?.map((item) => item?.price));
    const anotherMin = Math.min(...values?.map((item) => item?.price));


    return (
        <div className='ms-5 mb-2'>

            <h1 className='mb-5'>Maxnumbercheck</h1>

            <h4>Max Number : {maxNumber}</h4>

            <h4>Min Number : {minNumber}</h4>

            {/* another price check */}

            <h2 className='mt-5'>Another Price Check Max and Min</h2>

            <h4>Max Price : {anotherMax}</h4>
            <h4 className='mt-3'>Min Price : {anotherMin}</h4>

        </div>
    )
}

export default Maxnumbercheck