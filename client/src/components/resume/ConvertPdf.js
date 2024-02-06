import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ResumeDesign from './ResumeDesign'
export default class componentName extends Component {
    componentRef = null;
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: "old boring text"
        };
    }

    handleAfterPrint = () => {
        console.log("onAfterPrint called");
    };

    handleBeforePrint = () => {
        console.log("onBeforePrint called");
    };

    handleOnBeforeGetContent = () => {
        this.setState({ text: "Loading new text...", isLoading: true });
        return new Promise((resolve) => {
            setTimeout(() => {
                this.setState(
                    { text: "New, Updated Text!", isLoading: false },
                    resolve
                );
            }, 2000);
        });
    };

    setComponentRef = (ref) => {
        this.componentRef = ref;
    };

    reactToPrintContent = () => {
        return this.componentRef;
    };

    reactToPrintTrigger = () => {

        return <button className='edit-btn'>
            {this.state.isLoading ? <>Loading...</> : <> Download Pdf</>}
        </button>;
    };

    render() {

        const { name, data } = this.props;
        return (
            <div>
                <ReactToPrint
                    content={this.reactToPrintContent}
                    documentTitle={name}
                    onAfterPrint={this.handleAfterPrint}
                    onBeforeGetContent={this.handleOnBeforeGetContent}
                    onBeforePrint={this.handleBeforePrint}
                    removeAfterPrint
                    trigger={this.reactToPrintTrigger}
                />
                <div className='d-none'>
                    <ResumeDesign ref={el => (this.componentRef = el)} name={name} data={data} />
                </div>
            </div>
        );
    }
}
