import React, { useState } from 'react';
import './tab.scss';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const textVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
    };
    const buttonVariants = (index) => ({
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.3, // Modify delay to stagger buttons
                duration: 0.8,
                ease: "easeIn",
            },
        },
    });

    const pVariants = {
        initial: {
            y: 400,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 3,
                duration: 1.5,
                ease: "easeIn",
            },
        },
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <motion.div className="content" key="tab1"
                        initial="initial" animate="animate">
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(0)}><img src="./icon-1.png" alt="HTML" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(1)}><img src="./icon-2.png" alt="CSS" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(2)}><img src="./icon-3.png" alt="React" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(3)}><img src="./icon-4.png" alt="C#" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(4)}><img src="./icon-5.png" alt="C++" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(5)}><img src="./icon-6.png" alt="Java" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(6)}><img src="./icon-7.png" alt="Python" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(7)}><img src="./icon-8.png" alt="MySQL" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(8)}><img src="./icon-9.png" alt="PHP" /></motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(9)}><img src="./icon-10.png" alt="PHP" /></motion.button>
                    </motion.div>
                );
            case 'Tab2':
                return <div className="content" key="tab2">
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(0)}>
                        <img src="./tool1.png" alt="HTML" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(1)}>
                        <img src="./tool2.png" alt="CSS" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(2)}>
                        <img src="./tool3.png" alt="React" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(3)}>
                        <img src="./tool4.png" alt="React" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(4)}>
                        <img src="./tool5.png" alt="React" />
                    </motion.button>
                </div>;
            case 'Tab3':
                return <div className="content2" key="tab3">
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(0)}>
                        Creative Thinking
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(1)}>
                        Attention to Detail
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(2)}>
                        Keen to Learn
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(3)}>
                        Pressure Handling
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} variants={buttonVariants(4)}>
                        Teamwork
                    </motion.button>
                </div>;
            default:
                return null;
        }
    };


    return (
        <motion.div className="tabs-container"
            ref={ref}
            variants={textVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}>
            <div className="tabs">
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => setActiveTab('Tab1')}>Languages</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => setActiveTab('Tab2')}>Tools</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => setActiveTab('Tab3')}>Personality</motion.button>
            </div>
            <motion.div className="content-container">
                {renderContent()}
            </motion.div>
            <motion.div className="text"
                variants={pVariants}>
                <p>To be continued...</p>
            </motion.div>
        </motion.div >
    );
};

export default Tab;