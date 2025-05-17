import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const fetchUsers = createAsyncThunk("getUsers", async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=353670bc930828081098aed28dbc529c");
        // const response = await axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=353670bc930828081098aed28dbc529c");
        console.log(response);
        
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
})



const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: [],
        error: null
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.users = [];
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            })
    }


    // extraReducers: {
    //     [fetchUsers.pending]: (state) => {
    //         state.loading = true;
    //         state.users = [];
    //         state.error = null;
    //     },
    //     [fetchUsers.fulfilled]: (state, action) => {
    //         state.loading = false;
    //         state.users = action.payload;
    //         state.error = null;
    //     },
    //     [fetchUsers.rejected]: (state, action) => {
    //         state.loading = false;

    //     }
    // }
})



export default userSlice.reducer