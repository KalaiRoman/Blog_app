import React from 'react'

function Sortmethod() {

    // only check array of objects and array methods
    const mainsection = [
        {
            id: 1,
            name: "kalai",
            des: "4"
        },
        {
            id: 2,
            name: "main",
            des: "2"
        },
        {
            id: 3,
            name: "vimal",
            des: "2"
        },
        {
            id: 4,
            name: "naveen",
            des: "4"
        }
    ];
    const maincheck = [
        {
            id: 1,
            name: "kalai",
            des: "4"
        },
        {
            id: 2,
            name: "main",
            des: "2"
        },

    ];
    return (
        <div className='mt-2 ms-5'>
            <h1>Sortmethod</h1>

            {mainsection?.map((item) => {
                return (
                    <div>
                        {item?.name}
                        {maincheck?.some((items) => items?.id == item?.id) ? <span className='ms-2'>checked</span> : <></>}
                    </div>
                )
            })}
        </div>
    )
}

export default Sortmethod