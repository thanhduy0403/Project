import React from 'react'
import {AiFillCaretRight } from "react-icons/ai";
import "./Customhome.css"
const Offer = ({img='',conten='',title=''}:{img:string,conten:string,title:string}) => {
  return (
    <>  
      <div className='ms-5 col--11 col-md-5 col-lg-3 mx-0 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={img} className='card-img-top img-fluid'  />
                <div className='card-body'>
                  <h3 className='card-title '>{title} </h3>
                  <p className='card-text color-conten'>{conten}</p>
                  <p className='next' >Read More {<AiFillCaretRight/>}</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default Offer