import React, { Component } from 'react';
import DesignPdfResume from './DesignPdfResume';

export default class componentName extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { name, data } = this.props;
        return (
            <div>
                <DesignPdfResume name={name} data={data} />
            </div>
        );
    }
}
