import React, { ReactNode } from 'react'
import { Databody } from '../data/DataBody'
import img from '..//image/imgbody.jpg'
import "./Customhome.css"
import { IoIosCall } from "react-icons/io";
interface item {
    list :{
      conten:string,
       phone: string,
      contact:string,
      icon:ReactNode
    }
  }
    
const Ourservices = () => {

  return (
   <>
    <section>
      <div className='body-cover'>
        <div className='body-img '>
          <img src={img} alt="" />
        </div>
        <div className='body-conten'>
           <div className='Services'>
           Our Services</div>
           <h2 className='Responsive'>Responsive & Professional</h2>
           <div className='conten'>
            {Databody.map((list,item)=>{
                return(
                    <div key = {`Databody.${list.id}`}>
                        <p>{list.conten}</p>
                    </div>
                )
            })}
           </div>
           <div className='call'>
                <p>Call us today</p>
           </div>
          
                {Databody.map((list,item)=>{
                    return (
                        <div key = {`Databody.${list.id}`}>
                            <p>Call us today</p>
                            <div className='call-phone'>
                                {<IoIosCall/>} {list.phone}
                            </div>
                            <p className='contact'>{list.contact}</p>
                        </div>
                    )
                })}
        </div>
      </div>
    </section>
   </>
  )
}

export default Ourservices