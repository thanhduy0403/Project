import React from 'react'
import "./Custompage.css"
import Footer from '../layout/Footer'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface Item {
  id:number;
  title :string;
  price:number;
  description:string;
  images :string[];
  creationAt:string;
  category:{
    id:number;
    name:string;
    image :string;
    creationAt:string;
    updatedAt:string;
  }
}

const Product = () => {

  let [lists,setLists] = React.useState<Item[] | null > (null)
  React.useEffect (()=>{
    let getproduct = async()=>{
      let res = await fetch ("https://api.escuelajs.co/api/v1/products?offset=0&limit=4")
      const result =await res.json();
      console.log (result);
      setLists (result)
    }
    getproduct();
  },[]);
  return (
    <>
      <Swiper spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination= {{  clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
          {lists && lists.length >0 && lists.map((index)=>{
            return (
                  <SwiperSlide  key={`${index.id}`}>
                   
                    <img className='cover-img' src={index.images[0]} alt="" />
                    <div className='cover-body'>
                    <h3>{index.title}</h3>
                    <p>{index.price}</p>  
                    </div>
                </SwiperSlide>
            )
          })}
      </Swiper>
        <Footer/>
    </>
  )
}

export default Product