import { createSlice } from "@reduxjs/toolkit";
import FormRegisterPropertyThunk from "./FormRegisterPropertyThunk/FormRegisterPropertyThunk";
import FormContactThunk from "./FormContactThunk/FormContactThunk";

interface IAuth {
    recordUser: {
        id: number,
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
        contactMethod?: string,
        inquiryType?: string,
        howDidYouHearAboutUs?: string
    }[],
    accessToken: string | null;
    loading : "idle" | "pending" | "succeeded" | "failed",
    error: string | null,
}

const initialState:IAuth = {
    recordUser: [],
    accessToken: null,
    loading: "idle",
    error: null,
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetUI :(state)=>{
            state.loading ="idle"
            state.error = null;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase( FormRegisterPropertyThunk.fulfilled, (state) => {
            state.loading ="succeeded"
        })
        builder.addCase( FormRegisterPropertyThunk.rejected, (state) => {
            state.loading = "failed"
            state.error = "Error"
        })
        builder.addCase( FormRegisterPropertyThunk.pending, (state) => {
            state.loading = "pending"
        })

        builder.addCase( FormContactThunk.fulfilled, (state) =>{
            state.loading = "succeeded"
        } )
        builder.addCase( FormContactThunk.rejected, (state) =>{
            state.loading = "failed"
        } )
        builder.addCase( FormContactThunk.pending, (state) =>{
            state.loading = "pending"
        } )
    
    }
})


export {FormRegisterPropertyThunk, FormContactThunk}

export const {resetUI} = AuthSlice.actions

export default AuthSlice.reducer