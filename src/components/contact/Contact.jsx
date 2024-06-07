import React from 'react'
import "./contact.scss"
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const Contact = () => {
    const variants = {
        initial: {
            y: 500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div className="text" variants={variants}>
                <h3>Hire Me!</h3>
                <motion.div className="item" variants={variants}>
                    <h4>Mail</h4>
                    <span>jayneyou00@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h4>Phone</h4>
                    <span>7057958024</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h4>Address</h4>
                    <span>Barrie ON, Canada</span>
                </motion.div>
            </motion.div>
            <motion.div className="form">
                <form>
                    <input type="text" required placeholder='Name' />
                    <input type="email" required placeholder='Email' />
                    <textarea rows={8} placeholder='Message' />
                    <button>Submit</button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact