import React from 'react'
import "./contact.scss"
const Contact = () => {
    return (
        <div className="contact">
            <div className="text">
                <h3>Hire Me!</h3>
                <div className="item">
                    <h4>Mail</h4>
                    <span>jayneyou00@gmail.com</span>
                </div>
                <div className="item">
                    <h4>Phone</h4>
                    <span>7057958024</span>
                </div>
                <div className="item">
                    <h4>Address</h4>
                    <span>Barrie ON, Canada</span>
                </div>
            </div>
            <div className="form">
                <form>
                    <input type="text" required placeholder='Name' />
                    <input type="email" required placeholder='Email' />
                    <textarea rows={8} placeholder='Message' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact