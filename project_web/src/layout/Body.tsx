import React from 'react'
import Ourservices from '../headerhome/Ourservices'
import Offer from '../headerhome/Offer'
import { Offers } from '../data/Dataoffer'
import Subscribe from '../headerhome/Subscribe'
const Body = () => {

  return (
    <>
    <Ourservices/>
    <div className='section-offer'>
   <h3 className='title' >What We Offer</h3>
    <div className='row justify-content-center'>
        {Offers.map(item=> <Offer key={item.id} img={item.img} title={item.title} conten={item.conten} />)}
        </div>
    </div>
    <Subscribe/>
    </>
  )
}

export default Body