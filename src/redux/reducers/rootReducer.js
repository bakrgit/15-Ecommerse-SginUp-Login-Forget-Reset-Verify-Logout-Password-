import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from './subcategoryReducer'
import productsReducer from './productsReducer'
import authReducer from './authReducer'
export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducer,
    subCategory: subcategoryReducer,
    allproducts: productsReducer,
    authReducer: authReducer
})