import React, { useEffect, useState } from 'react'

const frames = ['-', '\\', '|', '/'];
let index = 0;

function UpdateLoading() {

    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setInterval(() => {
            const frame = frames[index = ++index % frames.length];
            setLoading(frame);
        }, 200);

        return () => {
            clearInterval();
        }
    }, [])
    return (
        <div>UpdateLoading
            {/* <div>
                {loading}<span>kalaisurya</span>     {loading}
            </div> */}
        </div>
    )
}

export default UpdateLoading