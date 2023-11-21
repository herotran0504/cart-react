import {EditProduct} from "./components/EditProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const EditProductPage = () => {
    return(
        <div className="delete-product">
            <Header/>
            <EditProduct/>
            <Footer/>
        </div>
    )
}