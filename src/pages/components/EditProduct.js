import {useState} from "react";
import {ProductService} from "../../services/ProductService";
import {getAvgRating} from "../utils/ProductUltils";

export const EditProduct = () => {
    const [productNumber, setProductNumber] = useState("");
    const [rating, setRating] = useState(0);
    const [product, setProduct] = useState({
        productNumber: "",
        productName: "",
        productImage: "",
        productPrice: 0,
        productDescription: "",
        productCategoryDTO:
            {
                categoryId: "",
                categoryName: "",
                categoryImage: ""
            },
        reviewDTOList: [],
        quantity: 0
    })
    const handleSearchClick = () => {
        ProductService.getProductByProductNumber(productNumber).then(
            data => {
                setProduct(data);
                setRating(() => getAvgRating(product));
                console.log(data)
            }
        ).catch(reason => {
            alert("Product not found!")
            console.log(reason);
        })
    }
    const handleFieldChange = (e) => {
        if (e.target.name === "categoryName") {
            setProduct({...product, productCategoryDTO: {...product.productCategoryDTO, categoryName: e.target.value}});
        } else {
            setProduct({...product, [e.target.name]: e.target.value});
        }
    }
    const handleDeleteClick = (e) => {
        e.preventDefault();
        if (product.productNumber !== "") {
            ProductService.deleteProduct(product.productNumber).then(
                data => {
                    console.log(data);
                }
            ).catch(reason => {
                alert("Delete fail!")
                console.log(reason);
            })
        }
    }
    const handleUpdateClick = (e) => {
        e.preventDefault();
        if (product.productNumber !== "") {
            ProductService.updateProduct(product).then(
                data => {
                    setProduct(data);
                    setRating(() => getAvgRating(product));
                    console.log(data);
                }
            ).catch(reason => {
                alert("Update fail!")
                console.log(reason);
            })
        }
    }
    return (
        <div>
            <div className="nav">
                <div>Product number:</div>
                <input name="productNumber" value={productNumber} onChange={e => setProductNumber(e.target.value)}/>
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td>Product Number:</td>
                        <td>
                            <input type="text" disabled={true} name="productNumber" value={product.productNumber}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product Name:</td>
                        <td>
                            <input type="text" name="productName" value={product.productName}
                                   onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product Price:</td>
                        <td>
                            <input type="text" name="productPrice" value={product.productPrice}
                                   onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product Category:</td>
                        <td>
                            <input type="text" disabled={true} name="categoryName" value={product.productCategoryDTO.categoryName}
                                   onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product Description:</td>
                        <td>
                            <input type="text" name="productDescription" value={product.productDescription}
                                   onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product quantity:</td>
                        <td>
                            <input type="text" name="quantity" value={product.quantity}
                                   onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Product Rating average:</td>
                        <td>
                            <input type="text" name="rating" disabled={true} value={rating}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleUpdateClick}>Update</button>
                        </td>
                        <td>
                            <button onClick={handleDeleteClick}>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}