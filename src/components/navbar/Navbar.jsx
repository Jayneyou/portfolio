import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* side bar */}
            <Sidebar />
            {/* nav bar */}
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    Jayne.dev</motion.span>
                <div className="social">
                    <a href="https://github.com/Jayneyou?tab=repositories"><img src="./github-icon2.png" alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/jayne-you-346b24291/"><img src="./linkedin-icon2.png" alt="LinkedIn" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;