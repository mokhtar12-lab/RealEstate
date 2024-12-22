import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const PropertiesSlice = createAsyncThunk( "Teams/PropertiesSlice", async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI

    try {
        const response = await axios.get("GET API Here")
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            return rejectWithValue(error.message)
        } else {
            return rejectWithValue("An error occurred while fetching properties")
        }

    }
})


export default PropertiesSlice;