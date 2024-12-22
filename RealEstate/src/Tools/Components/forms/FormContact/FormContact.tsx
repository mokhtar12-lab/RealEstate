import {useForm, SubmitHandler} from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { ContactSchema } from "../../../validations/FormContact/ContactSchema";
import { FormContactThunk, resetUI } from "../../../Store/AuthSlice/AuthSlice";


import "./formContactStyle.css"
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router";
type TContactSchema = z.infer<typeof ContactSchema>
export default function FormContact() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {loading} = useAppSelector( state => state.auth )


    const {register, handleSubmit, formState:{errors}} = useForm<TContactSchema>({
        mode: "onBlur",
        resolver: zodResolver(ContactSchema)
    })

    const FormSubmit: SubmitHandler<TContactSchema> = (data) =>{
        const {firstName, lastName, email, phone, message, howDidYouHearAboutUs, inquiryType, checked} = data
        dispatch(FormContactThunk( {firstName, lastName, email, phone, message, howDidYouHearAboutUs, inquiryType, checked} )).unwrap().then( ()=> {navigate('/')} )
    }

    useEffect( ()=>{
        return() =>{
        dispatch(resetUI())
        }
    },[dispatch] )

    return (
        <div className="form-contact">
            <div className="fill-the-form">
                <form onSubmit={handleSubmit(FormSubmit)}>
                    <div className="inputs-fill-the-form">

                        <div className="field">
                            <p>First Name</p>
                            <input type="text" className="input-field" placeholder="Enter First Name" {...register("firstName")} />
                            <p className="text-red-900">{errors.firstName?.message}</p>
                        </div>

                        <div className="field">
                            <p>Last Name</p>
                            <input type="text" className="input-field" placeholder="Enter Last Name"  {...register("lastName")}  />
                            <p className="text-red-900">{errors.lastName?.message}</p>
                        </div>
                        
                        <div className="field">
                            <p>Email</p>
                            <input type="email" className="input-field" placeholder="Enter Your Email" {...register("email")} />
                            <p className="text-red-900">{errors.email?.message}</p>
                        </div>
                    
                    </div>

                    <div className="inputs-fill-the-form">
                        <div className="field">
                            <p>Phone</p>
                            <input type="text" className="input-field" placeholder="Enter Phone Number" {...register("phone")} />
                            <p className="text-red-900"> {errors.phone?.message} </p>
                        </div>
                        

                        <div className="field">
                            <p>Inquiry Type</p>

                            <select className="filter" id="country" {...register("inquiryType")} >
                                <option value="">Select Inquiry Type</option>
                                <option value="1">Inquiry One</option>
                                <option value="2">Inquiry Two</option>
                                <option value="3">Inquiry Three</option>
                                <option value="4">Inquiry Four</option>
                            </select>
                            <p className=" text-red-700"> {errors.inquiryType?.message} </p>
                            
                        </div>

                        <div className="field">
                            <p>How Did You Hear About Us?</p>

                            <select className="filter" id="country" {...register("howDidYouHearAboutUs")} >
                                <option value="">How Did You Hear About Us?</option>
                                <option value="1">FaceBook</option>
                                <option value="2">Instagram</option>
                                <option value="3">Twitter</option>
                                <option value="4">Thread</option>
                            </select>
                            <p className=" text-red-700"> {errors.howDidYouHearAboutUs?.message} </p>
                            
                        </div>

                    </div>

                    <div className="inputs-fill-the-form-text-area">
                        <div className="field">
                            <p>Message</p>
                            <textarea className="input-text-area" placeholder="Enter Your Message" {...register("message")} />
                        </div>
                    </div>
                    <p className="text-red-900 pt-5"> {errors.message?.message} </p>

                    <div className="submit-area">
                        <div className="check-police">

                        <label className="checkbox-btn">
                            <label htmlFor="checkbox"></label>
                            <input id="checkbox" type="checkbox" {...register("checked")} />
                            <span className="checkmark"></span>
                        </label>

                        <p>
                            I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                        </p>
                        </div>

                        <div className="button">
                        <button className="btn-submit">
                            {loading === "pending" ? "loading" : "Send Your Message"}
                            </button>
                        </div>
                    </div>
                    <p className="text-red-900 pb-10"> {errors.checked?.message} </p>

                </form>
            </div>

        </div>
    )
}
