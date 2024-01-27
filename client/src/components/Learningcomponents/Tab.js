import React, { useId, useState } from 'react'
import { motion } from "framer-motion";
import './Tab.scss'
function Tab() {

    const data = ["one", "two", "three", "four"];

    const [activetab, setActivetab] = useState(0);

    const id = useId();


    return (
        <div>
            <div className='tab-section cursor'>
                {data?.map((item, index) => {
                    return (
                        <div key={`${id}-${index}`} onClick={() => setActivetab(index)} className={activetab == index ? "activetab" : "inactivetab"}>
                            {activetab === index && <motion.div layoutId={`id${index}`}>
                            </motion.div>}
                            <div>
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='text-center mt-4'>
                {activetab === 0 && <div>One</div>}
                {activetab === 1 && <div>Two</div>}
                {activetab === 2 && <div>Three</div>}
                {activetab === 3 && <div>Four</div>}
            </div>
        </div>
    )
}

export default Tab