import {AddProduct} from "./components/AddProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const AddProductPage = () => {
    return (
        <div className="add-product-page">
            <Header/>
            <AddProduct/>
            <Footer/>
        </div>
    );
};