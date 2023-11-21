import React from 'react'
import Portfolio_data from "./Portfolio.data"
import Card from "./Card"
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <>
        <section className="portfolio top" id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>VISIT MY PORTFOLIO</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((val, index) => {
                        return <Card key={index} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} />
                    })}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio