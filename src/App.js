import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import {
    AddProductPage,
    CartPage, EditProductPage,
    HomePage,
    OrderConfirmationPage, OrderDetailsPage,
    OrderListingPage,
    ProductDetailsPage,
    ProductLCategoryPage, ProductListingPage,
    SearchPage,
} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/categories" element={<ProductLCategoryPage/>}/>
                <Route exact path="/addProduct" element={<AddProductPage/>}/>
                <Route exact path="/editProduct" element={<EditProductPage/>}/>
                <Route exact path="/productDetails" element={<ProductDetailsPage/>}/>
                <Route exact path="/orders" element={<OrderListingPage/>}/>
                <Route exact path="/carts" element={<CartPage/>}/>
                <Route exact path="/order-details" element={<OrderDetailsPage/>}/>
                <Route exact path="/order-confirmation" element={<OrderConfirmationPage/>}/>
                <Route exact path="/search" element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
