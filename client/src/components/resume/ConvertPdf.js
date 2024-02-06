import React, { Component } from 'react';

import ReactToPrint from 'react-to-print';
import ResumeDesign from './ResumeDesign'
export default class componentName extends Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => {

                        return <a href="#" className='edit-btn'>Download Pdf</a>
                    }}
                    content={() => this.componentRef}
                />
                <div className='d-none'>
                    <ResumeDesign ref={el => (this.componentRef = el)} />
                </div>
            </div>
        );
    }
}
