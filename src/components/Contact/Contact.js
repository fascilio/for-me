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

    // const formSubmit = (e) => {
    //     e.preventDefault()
    //     alert(
    //         `
    //         Hi, my name is ${data.fullname}.
    //         My phone number is ${data.phone}
    //         My email address is ${data.email}.
    //         My subject is about ${data.subject}.
    //         My message to you is ${data.message}
    //         `
    //     )
    // }
    
    const formSubmit = async (e) => {
        e.preventDefault();
    
        //Formspree endpoint
        const formEndpoint = 'https://formspree.io/f/xvojjpre';
        
        const response = await fetch(formEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.fullname,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message,
            }),
        });
    
        if (response.ok) {
            alert('Message sent successfully!');

            setData({
                fullname: '',
                phone: '',
                email: '',
                subject: '',
                message: '',
            });
        } else {
            alert('Error sending message. Please try again later.');
        }
    };
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
                                <h1>Samuel Karanja</h1>
                                <p>I am available for freelance work at affordable rates. Connect with me via a call or my socials below;</p>
                                <br />
                                <p>Phone: +254 (0) 758 840 101</p>
                                <p>Email: fascilior@gmail.com</p> <br />
                                <span>FIND WITH ME</span>
                                <div className='button f_flex'>
                                    <button className='btn_shadow' onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100084794587624/'}>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow' onClick={() => window.location.href = 'https://www.instagram.com/vapour018?igshid=MTk0NTkyODZkYg==/'}>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-twitter'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <a href="https://wa.me/0758840101"><i className='fab fa-whatsapp'></i></a>
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
                                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required/>
                                </div>
                                <div className='input row'>
                                    <span>YOUR NUMBER</span>
                                    <input type='phone' name='phone' value={data.phone} onChange={InputEvent} required/>
                                </div>
                            </div>
                            <div className='input'>
                                <span>EMAIL</span>
                                <input type='email' name='email' value={data.email} onChange={InputEvent}  required/>
                            </div>
                            <div className='input'>
                                <span>SUBJECT</span>
                                <input type='text' name='subject' value={data.subject} onChange={InputEvent} required/>
                            </div>
                            <div className='input'>
                                <span>YOUR MESSAGE</span>
                                <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} required></textarea>
                            </div>
                            {/* <button className='btn_shadow'>
                                SEND MESSAGE <i className='fa fa-arrow-down'></i>
                            </button> */}
                            <button className='btn_shadow' onClick={formSubmit}>
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
//onClick={() => window.location.href = 'https://www.x.com/ru?t=cqsxkNRmKldytl3vph3G3w&s=09/'}