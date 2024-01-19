import React, { useEffect, useState } from 'react'

function Callbackfunction() {

    const [storeid, setStoreid] = useState(null);
    const datas = [1, 2, 3, 4, 5, 6];
    const CallBack = (data) => {
        setStoreid(data);
    }

    const firstFunction = (id) => {
        const changesname = `MOCKTESTID${id}`
        CallBack(changesname)
    }

    useEffect(() => {
    }, [storeid])
    return (
        <div className='ms-5'>

            Callbackfunction

            <div className='mt-3 mb-4'>
                Id : {storeid}
            </div>
            {datas?.map((item) => {
                return (
                    <div>
                        <button onClick={() => firstFunction(item)} className='p-4 w-25 mb-4 mt-2'>{item}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Callbackfunction