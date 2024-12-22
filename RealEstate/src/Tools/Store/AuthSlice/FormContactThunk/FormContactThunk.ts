import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

interface IFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message?: string,
    howDidYouHearAboutUs?:string,
    inquiryType?:string,
    checked: boolean
}


const FormContactThunk = createAsyncThunk( "auth/FormContactThunk", async(FormData:IFormData, thunkAPI) =>{

    const {rejectWithValue} = thunkAPI

    try {
        const res = await axios.post("http://localhost:3000/contactData", FormData)
        return res.data
    } catch (error) {
        console.error(error)
        return rejectWithValue('Failed to sign up')
    }

} )



export default FormContactThunk;