import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error:false,
    orders: [],
}

const ordersSlice = createSlice(
    {
        name:'orders',
        initialState,
        reducers:{
            getOrdersRequest:(state,action)=>{
                state.loading = true ; 
                state.error = false ;
                state.orders = [];
            },
            getOrdersSuccess:(state,action)=>{
                state.loading = false;
                state.orders = action.payload;
                state.error = false;
            }
            ,
            getOrdersFailure :(state,action)=>{
                state.error = action.payload;
                state.loading = false ;
                state.orders = [];
            }
        }
    }
)

export const OrdersAction = ordersSlice.actions;
export default ordersSlice;