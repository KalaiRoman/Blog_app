import React from 'react'
function Cards({ data }) {
    return (
        <div>
            <div>
                <img className="dashobard-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
            </div>
            <div className='mt-3'>
                user {data}
            </div>
            <div className='d-flex justify-content-around mt-3 mb-2'>
                <div>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Cards