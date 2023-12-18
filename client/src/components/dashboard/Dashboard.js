import React from 'react'
import './styles/Dasboard.scss';
import Cards from './Cards';
function Dashboard() {

    return (
        <div className='main-dashboard-section'>
            <div className='container'>
                <div className='row gap-4'>
                    {Array(10)?.fill("number")?.map((item, index) => {
                        return (
                            <div key={index} className='cards col-lg-3'>
                               <Cards data={index+1}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Dashboard