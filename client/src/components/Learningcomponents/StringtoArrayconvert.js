import React from 'react'

function StringtoArrayconvert() {
    const name = "kalaisurya";
    const convert = Array.from(name);

    // fill method

    const fillmethods = Array(2).fill("kalai");

    // 
    return (
        <div className='ms-5 mt-4'>
            <h4>StringtoArrayconvert</h4>

            <div>
                {name}
            </div>
            <div>
                {convert?.length}
            </div>
            <div>
                {convert?.map((item) => {
                    return (
                        <div>
                            {item}

                        </div>
                    )
                })}
            </div>

            <div>
                {fillmethods?.map((item, index) => {
                    return (
                        <div>
                            {item} {index + 1}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StringtoArrayconvert