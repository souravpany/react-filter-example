import { createSlice } from '@reduxjs/toolkit';
import { data } from '../data';

const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProductsDefaultBrandAndPrice: (state, action) => {

            state.products = data.filter((curData) => {
                return (
                    curData.type === action.payload.brand
                    && curData.price == action.payload.price
                )
            })
        },
        filterProductsByCategories: (state, action) => {

            action.payload === 'All' ?
                state.products = data
                :
                state.products = data.filter((curData) => {
                    return curData.cat === action.payload
                })
        },
        filterProductsByBrand: (state, action) => {

            state.products = data.filter((curData) => {
                return curData.type === action.payload
            })
        },
        filterProductsByTitile: (state, action) => {

            state.products = state.products.filter((item) => {
                return item.name.toLowerCase().search(action.payload) != -1;
            });
        },
        filterProductsByPrice: (state, action) => {

            state.products = data.filter((item) => {
                return item.price == action.payload
            });
        }
    }
})

export const {
    filterProductsByCategories,
    filterProductsByBrand,
    filterProductsByTitile,
    filterProductsByPrice,
    filterProductsDefaultBrandAndPrice
} = productsSlice.actions;

export default productsSlice.reducer