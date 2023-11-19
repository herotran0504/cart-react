import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/CartReducer';
import ProductReducer from "./reducers/ProductReducer";
    import orderReducer from "./reducers/OrderReducer";

const reducers = combineReducers({
    cart: cartReducer,
    order: orderReducer,
    products: ProductReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
