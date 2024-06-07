import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './about.scss';

const About = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 10vh", "end start"]
    })
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <motion.div className="container" ref={ref}>
            <motion.div className='about'
            >
                <motion.h2 >Web/Software Developer</motion.h2>
                <motion.h1>Hi!
                    <TypeAnimation
                        sequence={[
                            ' This is Jayne You',
                            1000,
                            ''
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </motion.h1>
                <motion.div className="buttons">
                    <motion.button ><a href="#Projects">See my works</a></motion.button>
                    <motion.button ><a href="#Contact">Contact</a></motion.button>
                </motion.div>
            </motion.div>
            <motion.div className="stars" style={{ x: yBg }}>
            </motion.div>
        </motion.div>

    )
}


export default About;
