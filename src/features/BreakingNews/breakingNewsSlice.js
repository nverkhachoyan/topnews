import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: '',
    error: ''
}

const breakingNewsSlice = createSlice({
    name: 'BreakingNews',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            let posts = action.payload
            state.status = 'success'
            state.posts = posts.slice(0, 6)
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(BASE_URL)
    return response.data
})

export default breakingNewsSlice.reducer
export { fetchPosts }