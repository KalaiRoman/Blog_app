import React from 'react'
import './Resumepdf.scss'
function DesignPdfResume({ name, data }) {

    const { personDetails } = data;
    return (
        <div>

            <div style={{ border: "1px solid red", display: "flex", backgroundColor: "blue", width: "auto" }}>
                <div>
                    <div>
                        {personDetails[0]?.name}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DesignPdfResume