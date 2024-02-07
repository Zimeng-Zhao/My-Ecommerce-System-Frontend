import { createSlice } from "@reduxjs/toolkit";

const productsStore = createSlice({
    name: "products",
    initialState: {
        productsList: [],
        // cartList:[]
    },
    reducers: {
        setProductsList(state, action){
            state.productsList = action.payload;
        }
    }
})

const {setProductsList} = productsStore.actions;

const productsReducer = productsStore.reducer;

const fetchProductsList = () =>{
    return async (dispatch) =>{
        const res = await axios.get();
    }
}