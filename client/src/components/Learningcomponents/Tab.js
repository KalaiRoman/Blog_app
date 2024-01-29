import React, { useId, useState } from 'react'
import { motion, useScroll } from "framer-motion";
import './Tab.scss'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}
function Tab() {

    const { scrollYProgress } = useScroll();

    const [isOpen, setIsOpen] = useState(false)

    const data = ["one", "two", "three", "four"];

    const [activetab, setActivetab] = useState(0);

    const id = useId();





    return (
        <div>

            <motion.div style={{ scaleX: scrollYProgress }} />

            <h2>welcome</h2>
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