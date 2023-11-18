import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/CartReducer';
import orderReducer from "./reducers/OrderReducer";

const reducers = combineReducers({
    cart: cartReducer,
    order: orderReducer
});

const store = createStore(reducers);

export default store;
