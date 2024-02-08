import React from 'react'
import './Resumepdf.scss'
function DesignPdfResume({ name, data }) {
    const { personDetails } = data;
    return (
        <div style={{ width: "100%", margin: "0 auto", marginLeft: "40px" }}>
            <div style={{ width: "100%", height: "100vh" }}>
                <div style={{ height: "15vh", display: "flex", gap: "40px" }}>
                    <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: 'center' }}>
                        <img src={personDetails && personDetails[0]?.profileimage} alt="no image" style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%"
                        }} />
                    </div>
                    <div style={{ width: "80%" }}>
                        <div>
                            <h3>{personDetails && personDetails[0]?.name}</h3>
                        </div>
                        <div>
                            <h5>{personDetails && personDetails[0]?.role}</h5>
                        </div>
                        <div style={{ color: "#E0DEDE", fontSize: "19px", fontWeight: "normal" }}>
                            <>{personDetails && personDetails[0]?.description}</>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", height: "85vh", display: "flex" }}>
                    <div style={{ width: "35%", background: "#98E4FF", height: "85vh" }}>
                    </div>
                    <div style={{ width: "65%", background: "white", height: "85vh" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignPdfResume