import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './about.scss';

const About = () => {
    return (
        <motion.div className="container">
            <motion.div className='about'>
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
            <motion.div className="stars"></motion.div>
        </motion.div>

    )
}


export default About;
