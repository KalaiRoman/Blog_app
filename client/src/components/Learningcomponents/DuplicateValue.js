import React, { useEffect, useState } from 'react'


function DuplicateValue() {
    const [duplicatevalue, setDuplicateValue] = useState([]);
    const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3, 10, 7, 10, 5, 5, 5, 5].sort();
    const numbers1 = [1, 2, 3, 2, 3, 4, 5, 5, 5, 5];

    const filtersdata = [...new Set(numbers1)];

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

            {filtersdata?.map((item) => item)}

        </div>
    )
}

export default DuplicateValue