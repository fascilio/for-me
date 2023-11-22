import React from 'react'
import Card from "./Card"
import "./Resume.css"
import ResumeApi from "./Resume.Api"

const Resume = () => {
  return (
    <>
        <section className='Resume' id='resume'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4> 1 YEAR OF EXPERIENCE</h4>
                    <h1>My Resume</h1>
                </div>

                <div className='content-section mtop d_flex'>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2007 - 2023</h4>
                            <h1>Education quality</h1>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, id) => {
                                if (val.category === "education"){
                                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                }
                            })}                            
                        </div>
                    </div>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2020 - 2023</h4>
                            <h1>Job Experience</h1>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, id) => {
                                if (val.category === "experience"){
                                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                                }
                            })}                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume