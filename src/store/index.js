import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/CartReducer';
import ProductReducer from "./reducers/ProductReducer";

const reducers = combineReducers({
    cart: cartReducer,
    products: ProductReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
