import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./formRegisterPropertyStyle.css"

import {useForm, SubmitHandler} from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';



import { RegisterPropertySchema } from "../../../validations/FormRegisterProperty/RegisterPropertySchema"; 
import { FormRegisterPropertyThunk, resetUI } from "../../../Store/AuthSlice/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";



type TRegisterPropertySchema = z.infer<typeof RegisterPropertySchema>
export default function FormRegisterProperty() {
  const navigate = useNavigate()
  const {loading} = useAppSelector( state => state.auth )
  const dispatch = useAppDispatch()


  const {register, handleSubmit, formState:{errors}} = useForm<TRegisterPropertySchema>({
    mode: "onBlur",
    resolver: zodResolver(RegisterPropertySchema)
  })


  const FormSubmit: SubmitHandler<TRegisterPropertySchema> = (data) => {
    const {firstName, lastName, email, phone, message, selectProperty, preferredLocation, numOfBathRooms, numOfBedrooms, budget, numberMethod, emailMethod, checked} = data
    dispatch(FormRegisterPropertyThunk({firstName, lastName, email, phone, message, selectProperty, preferredLocation, numOfBathRooms, numOfBedrooms, budget, numberMethod, emailMethod, checked })).unwrap().then( ()=> {navigate('/')} )
  }



  useEffect( ()=>{
    return() =>{
      dispatch(resetUI())
    }
  },[dispatch] )



  const SelectPhone = () =>{
    document.querySelector('.select-phone')?.classList.toggle('fill-select')
  }
  const SelectMail = () =>{
    document.querySelector('.select-mail')?.classList.toggle('fill-select')
  }

  return (
    <div className="form-register">

      <div className="fill-the-form">
        <form onSubmit={handleSubmit(FormSubmit)}>
          <div className="inputs-fill-the-form">

            <div className="field">
              <p>First Name</p>
              <input type="text" className="input-field" placeholder="Enter First Name" {...register("firstName")} />
              <p className=" text-red-700"> {errors.firstName?.message} </p>
            </div>

            <div className="field">
              <p>Last Name</p>
              <input type="text" className="input-field" placeholder="Enter Last Name"  {...register("lastName")} />
              <p className=" text-red-700"> {errors.lastName?.message} </p>
            </div>
            
            <div className="field">
              <p>Email</p>
              <input type="email" className="input-field" placeholder="Enter Your Email"  {...register("email")} />
              <p className=" text-red-700"> {errors.email?.message} </p>
            </div>
            
            <div className="field">
              <p>Phone</p>
              <input type="text" className="input-field" placeholder="Enter Phone Number"  {...register("phone")} />
              <p className=" text-red-700"> {errors.phone?.message} </p>
            </div>
          
          </div>

          <div className="inputs-fill-the-form">

            <div className="field">
              <p>Preferred Location</p>
              <select className="filter" id="country" {...register("preferredLocation")} >
                  <option value="">Select a Location</option>
                  <option value="1">Cairo</option>
                  <option value="2">alexandria</option>
                  <option value="3">london</option>
                  <option value="4">munich</option>
                  <option value="5">austria</option>
                  <option value="6">Azerbaijan</option>
                  <option value="7">Bahrain</option>
                  <option value="8">Yemen</option>
                  <option value="9">Argentina</option>
                  <option value="10">Bolivia</option>
                  <option value="11">Brazil</option>
                  <option value="12">Venezuela</option>
              </select>
              <p className=" text-red-700"> {errors.preferredLocation?.message} </p>
            </div>

            <div className="field">
              <p>Property Type</p>

              <select className="filter" id="country" {...register("selectProperty")} >
                  <option value="">Select Property Type</option>
                  <option value="1">villa</option>
                  <option value="2">Home</option>
                  <option value="3">House</option>
                  <option value="4">Garden</option>
              </select>
              <p className=" text-red-700"> {errors.selectProperty?.message} </p>
              
            </div>

            <div className="field">
              <p>No. of Bathrooms</p>

              <select className="filter" id="country" {...register("numOfBathRooms")} >
                  <option value="">No. of Bathrooms</option>
                  <option value="1">1 Rooms</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
              </select>
              <p className=" text-red-700"> {errors.numOfBathRooms?.message} </p>
              
            </div>

            <div className="field">
              <p>No. of Bedrooms</p>

              <select className="filter" id="country" {...register("numOfBedrooms")} >
                  <option value="">No. of Bedrooms</option>
                  <option value="1">1 Rooms</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
              </select>
              <p className=" text-red-700"> {errors.numOfBedrooms?.message} </p>
              
            </div>
          
          </div>

          <div className="inputs-fill-the-form-Method">

            <div className="title-fields">
              <p>Budget</p>
              <p>Preferred Contact Method</p>
            </div>

            <div className="fields">

              <div className="field-Budget">
                <p className="label">Budget</p>
                <select className="filter" id="country" {...register("budget")} >
                    <option value="">Budget</option>
                    <option value="1">$1000 : $1500</option>
                    <option value="2">$2000 : $2500</option>
                    <option value="3">$3000 : $3500</option>
                </select>
                <p className=" text-red-700"> {errors.budget?.message} </p>
              </div>

              <div className="field-Method">

                <p className="label">Preferred Contact Method</p>
                <div className="filter-method">
                  <FaPhoneAlt className="icon-methods" />
                  <input type="text" className="input-field" placeholder="Enter Your Number" {...register("numberMethod")}  />
                  <div className="select-phone" onClick={()=> SelectPhone()}></div>
                  <p className=" text-red-700"> {errors.numberMethod?.message} </p>
                </div>

                <div className="filter-method">
                  <IoIosMail className="icon-methods" />
                  <input type="text" className="input-field" placeholder="Enter Your Email"  {...register("emailMethod")}  />
                  <div className="select-phone" onClick={()=> SelectPhone()}></div>
                  <div className="select-mail" onClick={()=> SelectMail()}></div>
                  <p className=" text-red-700"> {errors.emailMethod?.message} </p>
                </div>


              </div>
            </div>

          </div>

          <div className="inputs-fill-the-form-text-area">
            <div className="field">
              <p>Message</p>
              <textarea className="input-text-area" placeholder="Enter Your Message"  {...register("message")}   />
            </div>
          </div>
          <p className=" text-red-700"> {errors.message?.message} </p>


          <div className="submit-area">
            <div className="check-police">

              <label className="checkbox-btn">
                  <label htmlFor="checkbox"></label>
                  <input id="checkbox" type="checkbox"  {...register("checked")} />
                  <span className="checkmark"></span>
              </label>

              <p>
                I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
              </p>
            </div>

            <div className="button">
              <button className="btn-submit">
                {loading === "pending" ? "Loading" : "Send Your Message"}
                </button>
            </div>
          </div>
          <p className=" text-red-700 pb-10"> {errors.checked?.message} </p>
        </form>
      </div>

    </div>
  )
}
