import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import {
    AddProductPage,
    CartPage,
    EditProductPage,
    HomePage,
    OrderConfirmationPage,
    OrderDetailsPage,
    OrderListingPage,
    PaymentInformationPage,
    PersonalInformationPage,
    ProductDetailsPage,
    ProductLCategoryPage,
    SearchPage,
} from "./pages";
import CategoryFrame from "./pages/components/CategoryFrame";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/categories/:categoryName" element={<ProductLCategoryPage/>}/>
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
