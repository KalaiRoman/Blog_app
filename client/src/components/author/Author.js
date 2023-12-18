import React from 'react'
import Cards from './Cards'
import './styles/Author.scss';
function Author() {
    return (
        <div>
            <div className='container'>
                <div className='row gap-4'>
                    {Array(10)?.fill("number")?.map((item, index) => {
                        return (
                            <div key={index} className='card col-lg-3'>
                                <Cards data={index + 1} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Author