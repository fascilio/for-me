import React, { useState } from 'react'
import "./Contact.css"
import Ct from "../Pic/ctt.jpeg"

const Contact = () => {
    const [data, setData] = useState({ 
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
     })
    const InputEvent = (event) => {
        const {name, value} = event.target

        setData ((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(
            `My name is ${data.fullname}.
            My phone number is ${data.phone}
            My email address is ${data.email}.
            My subject is ${data.subject}.
            My message to you is ${data.message}
            `
        )
    }
  return (
    <>
        <section className='Contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>Get in touch with me</h1>
                </div>

                <div className='content d_flex'>
                    <div className='left'>
                        <div className='box box_shadow'>
                            <div className='img'>
                                <img src={Ct} alt="" />
                            </div>
                            <div className='details'>
                                <h1>Fascilio Ranjoh</h1>
                                <p>I am available for freelance work. Connect with me via a call into my account</p>
                                <br />
                                <p>Phone: +254 (0) 758 840 101</p>
                                <p>Email: fascilior@gmail.com</p> <br />
                                <span>FIND WITH ME</span>
                                <div className='button f_flex'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-twitter'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='right box_shadow'>
                        <form onSubmit={formSubmit}>
                            <div className='f_flex'>
                                <div className='input row'>
                                    <span>YOUR NAME</span>
                                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                </div>
                                <div className='input row'>
                                    <span>YOUR NUMBER</span>
                                    <input type='phone' name='phone' value={data.phone} onChange={InputEvent} />
                                </div>
                            </div>
                            <div className='input'>
                                <span>EMAIL</span>
                                <input type='email' name='email' value={data.email} onChange={InputEvent} />
                            </div>
                            <div className='input'>
                                <span>SUBJECT</span>
                                <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                            </div>
                            <div className='input'>
                                <span>YOUR MESSAGE</span>
                                <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                            </div>
                            <button className='btn_shadow'>
                                SEND MESSAGE <i className='fa fa-arrow-down'></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact