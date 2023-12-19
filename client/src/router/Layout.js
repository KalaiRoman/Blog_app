import React from 'react'
import Header from '../components/header/Header'
import './styles/Layout.scss';

function Layout({ children }) {
    return (
        <div className='main-layout-section'>

            <div className='inside-layout-section'>
                <div className='header-section-layout'>
                    <Header />
                </div>
                <div className='body-section-layout'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout