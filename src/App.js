import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import {
    AddProductPage,
    CartPage,
    DeleteProductPage,
    CartPage, EditProductPage,
    HomePage,
    OrderConfirmationPage,
    OrderDetailsPage,
    OrderListingPage,
    ProductDetailsPage,
    ProductLCategoryPage,
    SearchPage,
    UpdateProductPage,
    ProductLCategoryPage, ProductListingPage,
    SearchPage,
} from "./pages";
import {PaymentInformationPage} from "./pages/PaymentInformationPage";
import {PersonalInformationPage} from "./pages/PersonalInformationPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/categories" element={<ProductLCategoryPage/>}/>
                <Route exact path="/search" element={<SearchPage/>}/>
                <Route exact path="/addProduct" element={<AddProductPage/>}/>
                <Route exact path="/editProduct" element={<EditProductPage/>}/>
                <Route exact path="/productDetails" element={<ProductDetailsPage/>}/>
                <Route exact path="/orders" element={<OrderListingPage/>}/>
                <Route exact path="/carts" element={<CartPage/>}/>
                <Route exact path="/personal-information" element={<PersonalInformationPage/>}/>
                <Route exact path="/payment-information" element={<PaymentInformationPage/>}/>
                <Route exact path="/order-details" element={<OrderDetailsPage/>}/>
                <Route exact path="/order-confirmation" element={<OrderConfirmationPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
