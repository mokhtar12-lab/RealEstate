import { createSlice } from "@reduxjs/toolkit";
import PropertiesSlice from "./Thunk/GetTeamsThunk";


interface ITeam {
    recordTeam: {
        id: string,
        image: string,
        name: string,
        JobDescription: string,
        PhoneNumber: string,
        socialMedia: {
            facebook: string,
            twitter: string,
            linkedin: string,
            instagram: string
        },
    }[],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: string | null
}

const initialState: ITeam = {
    recordTeam: [],
    loading: "idle",
    error: null
}

const TeamsCompanySlice = createSlice({
    name: "Teams",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase( PropertiesSlice.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.recordTeam = action.payload
        } )

        builder.addCase( PropertiesSlice.rejected, (state)=>{
            state.loading = "failed"
            state.error = "Error"
        } )

        builder.addCase( PropertiesSlice.pending, (state)=>{
            state.loading = "pending"
        } )
    }
})


export {PropertiesSlice}

export default TeamsCompanySlice.reducer