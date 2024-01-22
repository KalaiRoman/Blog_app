import React from 'react'

function SwicthMethod() {

    const values = (params) => {
        switch (params) {
            case 1:
                return <div>welcome to one</div>;
                break;
            case 2:
                return <div>welcome to two</div>;
                break;
            default:
                return <div>welcome to Nothing</div>;

                break;
        }
    }
    return (
        <div>SwicthMethod

            {/* values(index + 1) */}
            {Array(6).fill(null)?.map((item, index) => {
                return (
                    <div key={index}>

                        {(() => {
                            switch (index + 1) {
                                case 1:
                                    return <div> {index + 1}</div>;
                                    break;
                                case 2:
                                    return <div> {index + 1}</div>
                                    break;

                                case 3:
                                    return <div> {index + 1}</div>
                                    break;
                                case 4:
                                    return <div> {index + 1}</div>
                                    break;
                                case 5:
                                    return <div> {index + 1}</div>
                                    break;
                                default:
                                    return <div>Nothing data</div>
                                    break;
                            }
                        })()}
                    </div>
                )
            })}


        </div>
    )
}

export default SwicthMethod