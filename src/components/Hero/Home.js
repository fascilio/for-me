import React from 'react'
import "./Home.css"
import visa2 from "../Pic/visa2.png"
import skill11 from "../Pic/skill11.png"
import react1 from "../Pic/react1.png"
import jscrpt1 from "../Pic/jscrpt1.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
                <div className="left top">
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1>
                        Hi, I'm <span>SAMUEL KARANJA</span> a
                    </h1>
                    <h2>
                         <span><Typewriter
                            words={['Software Developer', 'Procurement Officer', 'Supply chain manager' ]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            
                        /></span>
                    </h2>
                    <p>I am a professional coder with experience of a variety of coding languages, libraries and frameworks.
                        I am also a practicing procurement officer and a supply chain manager. 
                    </p>
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND ME WITH</h4>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <i className='fab fa-facebook-f'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin-in'></i>
                                </button>
                            </div>
                        </div>

                        <div className='col_1'>
                            <h4>BEST SKILLS ON</h4>
                            <button className='btn_shadow'>
                                <img src={skill11} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={react1} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={jscrpt1} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="right_img">
                        <img src={visa2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home