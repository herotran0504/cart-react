import React, {useState} from "react";
import {ProductService} from "../../services/ProductService";
import {ProductListing} from "./ProductListing";
export const SearchProduct = () => {
    const initialSearchFields = {
        categoryName: "",
        minPrice: 0,
        maxPrice: 0
    }
    const [searchData, setSearchData] = useState(initialSearchFields);
    const [productList, setProductList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const handleFieldChange = (e) => {
        setSearchData({...searchData, [e.target.name]: e.target.value});
    }
    const handleSearch = (e) => {
        console.log("Searching...")
        setRefresh(true);
        e.preventDefault();
        if (searchData.categoryName === "" && parseInt(searchData.minPrice) <= 0 && parseInt(searchData.maxPrice) <= 0) {
            alert("Please input search data")
        } else {
            setProductList([]);
            if (searchData.categoryName === "") {
                ProductService.getProductByPrice(searchData.minPrice, searchData.maxPrice).then(
                    data => {
                        setProductList(data);
                    }
                )
            } else if (parseInt(searchData.minPrice) <= 0 && parseInt(searchData.maxPrice) <= 0) {
                ProductService.getProductByCategory(searchData.categoryName).then(
                    data => {
                        setProductList(data);
                    }
                )
            } else {
                ProductService.getProductByPriceAndCategory(searchData.categoryName, searchData.minPrice, searchData.maxPrice).then(
                    data => {
                        setProductList(data);
                    }
                )
            }
        }
    }
    return (
        <div className="search-page">
            <div className="container">
                <form className="search-form container" onSubmit={handleSearch}>
                    <table>
                        <tbody>
                        <tr>
                            <td>Product price:</td>
                            <td>
                                Min: <input name="minPrice" value={searchData.minPrice} onChange={handleFieldChange}
                                            placeholder="0" required={false}/>
                                Max: <input name="maxPrice" value={searchData.maxPrice} onChange={handleFieldChange}
                                            placeholder="0" required={false}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Product category:</td>
                            <td>
                                <select name="categoryName" value={searchData.categoryName}
                                        onChange={handleFieldChange}>
                                    <option key={0} value="">Select category</option>
                                    <option key={1} value="books">Books</option>
                                    <option key={2} value="clothing">Clothing</option>
                                    <option key={3} value="electronic">Electronic</option>
                                    <option key={4} value="home">Home</option>
                                    <option key={5} value="sports">Sports</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Search</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div>
                <ProductListing productList={productList} refresh={refresh}/>
            </div>
        </div>
    )
}