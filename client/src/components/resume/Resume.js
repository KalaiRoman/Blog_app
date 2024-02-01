import React from 'react'

function Resume() {
    return (
        <div className='containers'>
            <div className='d-flex justify-content-between'>
                <div>
                    Resumes
                </div>
                <div>
                    <button className='edit-btn' onClick={() => window.location.assign("/createresume")}>+ Create Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Resume