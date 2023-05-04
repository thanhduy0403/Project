import React from 'react'
import './Customhome.css'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineMail } from "react-icons/ai";


const loginSchema = Yup.object({
    name: Yup.string().required("requires input more than 4 characters").min(4),
    phone: Yup.string().required("phone number required at least 10 characters, up to 10 characters").min(10).max(10),
    email: Yup.string().email().required("required to enter correct email format"),
  }).required();
type FormData = Yup.InferType<typeof loginSchema>;
const Subscribe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(loginSchema)
      });
      const onSubmit = (data: FormData) => {
        console.log(data)
      };

  return (
    <>
    <div className='section-form'>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Do not want to miss news, updates, note and any offer on our products, then please subscriber to our mailling list.</p>
        <form className='custom-form' action="" onSubmit={handleSubmit(onSubmit)}>
         <input {...register("name")} type="text"  name='name' placeholder='Your Name' required/>
         {errors.name && <p className="error">{errors.name.message}</p>}
         <input {...register("phone")} type="phone"  name='phone' placeholder='Your Mobile Phone' required />
         {errors.phone && <p className="error">{errors.phone.message}</p>}
         <input {...register("email")} type="email"  name='email' placeholder='Your Email' required />
         {errors.email && <p className="error">{errors.email.message}</p>}
         <button className='submit' type='submit' > {<AiOutlineMail/>} Subscribe email list
            </button>
      </form>
    </div>
    </>
  )
}

export default Subscribe