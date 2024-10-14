import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    perfumes: [],
    addProduct:[],
}

const perfumesSlice = createSlice(
    {
        name:'subscriptions',
        initialState,
        reducers:{
            getPerfumesRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.perfumes = [];
            },
            getPerfumesSuccess:(state,action)=>{
                state.loading = false;
                state.perfumes = action.payload;
                state.error = false;
            }
            ,
            getPerfumesFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.perfumes = [];
            },

            addProductRequest:(state,action)=>{
                state.loading=true;
                state.perfumes=action.payload;
                state.error=false;
            },
            addProductSuccess:(state,action)=>{
                state.loading=false;
                state.perfumes=action.payload;
                state.error=false;
            },
            addProductFailure:(state,action)=>{
                state.loading=false;
                state.perfumes=[];
                state.error=action.payload;
            }
        }
    }
)

export const PerfumesAction  = perfumesSlice.actions;
export default perfumesSlice;