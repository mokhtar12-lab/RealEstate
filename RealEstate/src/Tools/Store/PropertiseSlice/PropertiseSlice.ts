import { createSlice } from "@reduxjs/toolkit";
import GetPropertiesThunk from "./Thunk/GetPropertiesThunk";


interface IProperties {
    recordsProperty :{
        id: string,
        titleProperty: string,
        informationProperty: string,
        price: string,
        image: string,
        propertyDetails: {
            bedrooms: string,
            bathrooms: string,
            propertyType: string
        }
    }[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: IProperties ={
    recordsProperty: [],
    loading: "idle",
    error: null
}

const PropertiesSlice = createSlice({
    name : "properties",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(GetPropertiesThunk.fulfilled, (state, action) => {
            state.loading = "succeeded"
            state.recordsProperty = action.payload
        })

        builder.addCase(GetPropertiesThunk.rejected, (state) => {
            state.loading = "failed"
        })

        builder.addCase(GetPropertiesThunk.pending, (state) => {
            state.loading = "pending"
        })
    }
})


export  {GetPropertiesThunk}

export default PropertiesSlice.reducer