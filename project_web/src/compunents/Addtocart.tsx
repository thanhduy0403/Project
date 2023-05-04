import React, { ReactNode } from 'react'
const Addtocart = ({icon,custom } : {icon?:ReactNode ; custom?:string}) => {
  return (
    <>
     <div className={`cart ${custom}`} >
   {icon ?icon :null}
    <em>0</em> 
   </div>
    </>
  )
}

export default Addtocart