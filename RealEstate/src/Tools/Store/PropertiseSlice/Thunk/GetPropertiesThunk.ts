import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


const GetPropertiesThunk = createAsyncThunk("properties/GetPropertiesThunk", async (_, thunkAPI) =>{
    const {rejectWithValue} = thunkAPI

    try {
        const response = await axios.get("http://localhost:3000/properties")
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            return rejectWithValue(error.message)
        } else {
            return rejectWithValue("An error occurred while fetching properties")
        }

    }
})


export default GetPropertiesThunk;