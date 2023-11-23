import React, { useState } from 'react'

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt="" onClick={toggleModal} />
            </div>
            <div className="category d_flex">
                <span onClick={toggleModal}>{props.category}</span>
                <label>
                    <i className='far fa-heart'></i>
                    {props.totalLike}
                </label>
            </div>
            <div className="title">
                <h2 onClick={toggleModal}>{props.title}</h2>
                <a href="#popup" className="arrow" onClick={toggleModal}>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>


        {/* {popup Modal} */}
        {modal &&(
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content d_flex">
                    <div className="modal-img lef">
                        <img src={props.image} />
                    </div>
                    <div className="modal-text right">
                        <span>Featured - Design</span>
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        {/* <p>I started driving at the age of 7 during my primary school years.</p> */}
                        <div className="button f_flex mtop">
                            <button className="btn_shadow">
                                LIKE THIS <i className="far fa-thumbs-up"></i>
                            </button>
                            <button className="btn_shadow">
                                VIEW PROJECT <i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                        <button className="close-modal btn_shadow" onClick={toggleModal}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Card