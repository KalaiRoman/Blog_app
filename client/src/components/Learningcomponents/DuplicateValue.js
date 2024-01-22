import React, { useEffect, useState } from 'react'


function DuplicateValue() {
    const [duplicatevalue, setDuplicateValue] = useState([]);
    const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3, 10, 7, 10, 5, 5, 5, 5].sort();
    useEffect(() => {
        numbers?.map((item) => {
            if (duplicatevalue.includes(item)) {
            }
            else {
                setDuplicateValue([...duplicatevalue, item]);
            }
        })
    }, [duplicatevalue])
    return (
        <div>DuplicateValue
            {/* accending Order */}
            {duplicatevalue?.sort((item, index) => item - index)}

            {/* decending Order */}
            {/* {duplicatevalue?.sort((item, index) => index - item)} */}

        </div>
    )
}

export default DuplicateValue