import React from 'react'

function Checkbox() {
    const [datas, setDatas] = React.useState([]);
    const handleChange = (id) => {
        if (datas?.includes(id)) {
            return setDatas(datas?.filter((item) => item !== id));
        }
        else {
            setDatas([...datas, id])
        }
    }
    return (
        <div>
            {Array(10).fill("kalai")?.map((item, index) => {
                return (
                    <div className='d-flex gap-3 ms-4' onClick={() => handleChange(index)} key={index}>
                        <input type='checkbox' checked={datas?.includes(index)} />
                        <label>{item}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default Checkbox