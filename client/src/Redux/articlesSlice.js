import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
//........get all articles

export const getArticles = createAsyncThunk("articles/getArticles", async function (_, { rejectWithValue }) {
    try {
        const { data } = await axios.get("http://localhost:5000/data")
        return data
    } catch (err) {
        return rejectWithValue(err?.response.data.msg)
    }
})
export const postArticles = createAsyncThunk("articles/postArticles", async function (article, { rejectWithValue }) {
    try {
        const { data } = await axios.post("http://localhost:5000/postData",article)
        return data
    } catch (err) {
        return rejectWithValue(err?.response.data.msg)
    }
}) 
//........delete an article

export const deleteArticle=createAsyncThunk("articles/deleteArticle",async function (article,{rejectWithValue}) {
    try {
        
    const {data}=await axios.put("http://localhost:5000/deleteData/"+article.id,article) 
    return data
    } catch (err) {
        return rejectWithValue(err?.response.data.msg)
    }
  })
const initialState = {
    loading: true,
    errors: null,
    articles:[],
    articlesErreurs: null,
    addedArticle: null,
    modifiedArticle: null,
    deletedArticle: null,
} 

export const articlesSlice = createSlice({

    name: 'articles',
    initialState,
    reducers: {
        
        cleanArticlesErreuer: (state) => { state.articlesErreurs =null }
    },
    extraReducers: {

        [getArticles.pending]: (state) => { state.loading = true },
        [getArticles.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.articles = payload
        },
        [getArticles.rejected]: (state, { payload }) => {
            state.errors = payload
            state.loading = false
        },
        [postArticles.pending]: (state) => { state.loading = true },
        [postArticles.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.addedArticle = payload
        },
        [postArticles.rejected]: (state, { payload }) => {
            state.errors = payload
            state.loading = false
        },
        [deleteArticle.pending]: (state) => { state.loading = true },
        [deleteArticle.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.deletedArticle = payload
        },
        [deleteArticle.rejected]: (state, { payload }) => {
            state.errors = payload
            state.loading = false
        }
    }
})

export const { cleanArticlesErreuer } = articlesSlice.actions

export default articlesSlice.reducer