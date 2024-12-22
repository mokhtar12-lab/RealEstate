import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

interface IFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message?: string,
    selectProperty?: string,
    preferredLocation?: string,
    numOfBathRooms?: string,
    numOfBedrooms?: string,
    budget?: string,
    numberMethod?:string,
    emailMethod?: string,
    checked: boolean
}


const FormRegisterPropertyThunk = createAsyncThunk( "auth/FormRegisterPropertyThunk", async(FormData:IFormData, thunkAPI) =>{

    const {rejectWithValue} = thunkAPI

    try {
        const res = await axios.post("http://localhost:3000/userData", FormData)
        return res.data
    } catch (error) {
        console.error(error)
        return rejectWithValue('Failed to sign up')
    }

} )



export default FormRegisterPropertyThunk;