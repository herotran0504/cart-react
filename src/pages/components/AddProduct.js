import {useState} from "react";
import {ProductService} from "../../services/ProductService";

export const AddProduct = () => {
    const cleanProduct = {
        productNumber: "",
        productName: "",
        productPrice: 0.0,
        productImage: "",
        productDescription: "",
        productCategoryDTO:
            {
                categoryId: "",
                categoryName: "book"
            },
        reviewDTOList: [],
        quantity: 0
    }
    const [product, setProduct] = useState(cleanProduct);
    const handleFieldChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }
    const handleSelectCategory = (e) => {
        const productCategory = {
            categoryId: "",
            categoryName: e.target.value
        }
        setProduct({...product, productCategoryDTO: productCategory});
    }
    const handleSubmitForm = (e) => {
        // console.log(product);
        ProductService.addProduct(product).then(
            (responseData) => {
                console.log(responseData);
                alert(`Product number: ${responseData.productNumber} is added!`);
            }
        )
        e.preventDefault();
        setProduct(cleanProduct);
    }
    return (
        <div className="add-product">
            <div className="container">
                <form className="add-product-form" onSubmit={handleSubmitForm}>
                    <div><h3>Adding new product</h3></div>
                    <table>
                        <tbody>
                        <tr>
                            <td>Product name:</td>
                            <td>
                                <input name="productName" value={product.productName} onChange={handleFieldChange} required={true}
                                       placeholder="name should from 5 to 50 charactors"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Product price:</td>
                            <td>
                                <input name="productPrice" value={product.productPrice} onChange={handleFieldChange} placeholder="0.0" required={true} pattern="^[1-9][0-9]*$"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Product category:</td>
                            <td>
                                <select name="productCategory" value={product.productCategoryDTO.categoryName} onChange={handleSelectCategory}>
                                    <option key={0} value="books">Books</option>
                                    <option key={1} value="clothing">Clothing</option>
                                    <option key={2} value="electronic">Electronic</option>
                                    <option key={3} value="home">Home</option>
                                    <option key={4} value="sports">Sports</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Product description:</td>
                            <td>
                                <textarea name="productDescription" value={product.productDescription} required={true}
                                          onChange={handleFieldChange} placeholder=""/>
                            </td>
                        </tr>
                        <tr>
                            <td>Quantity:</td>
                            <td>
                                <input name="quantity" value={product.quantity} onChange={handleFieldChange} placeholder="0.0" required={true} pattern="^[0-9]*$"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit" onSubmit={handleSubmitForm}>Add product</button>
                </form>
            </div>
        </div>
    )
}