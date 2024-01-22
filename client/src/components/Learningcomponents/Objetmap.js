import React, { useEffect, useState } from 'react'

function Objetmap() {

    const names = { a: "kalai", b: "thala", c: "main" }
    const myObject = new Map();


    myObject.set(1, "kalai")
    myObject.set(3, "kalai")

    // const [duplicatevalue, setDuplicateValue] = useState([]);
    // const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    // useEffect(() => {
    //     numbers?.map((item, index) => {
    //         if (duplicatevalue.includes(item)) {
    //         }
    //         else {
    //             setDuplicateValue([...duplicatevalue, item]);
    //         }
    //     })
    // }, [duplicatevalue])

    useEffect(() => {

        for (let form in names) {
            console.log(form, 'k')
        }
        for (let key of myObject.keys()) {
            console.log(key, 'key')
        }
    }, [myObject, names])
    return (
        <div>
            Objetmap
            {/* {duplicatevalue?.sort((item, index) => item - index)}

            {() => {
                for (var key in myObject) {
                    return key;
                }
            }} */}

            {(() => {
                for (let form in names) {
                    return (
                        <div className='mt-2 mb-3'>
                            {form}
                        </div>
                    )
                }


            })()}

            {(() => {
                for (let key of myObject.keys()) {

                    return (
                        <div className='mt-2 mb-3'>
                            {key}
                        </div>
                    )
                }
            })(myObject)}
        </div>
    )
}

export default Objetmap