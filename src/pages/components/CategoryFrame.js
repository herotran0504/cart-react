import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProductFrame from "./ProductFrame";
import {ProductService} from "../../services/ProductService";


const CategoryFrame = ({categoryName}) => {
    const [index, setIndex] = useState(0);
    const {products, loading, error} = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialItem = {
        productNumber: "",
        productName: "",
        productPrice: 0,
        productDescription: "",
        quantity: 0,
        productCategoryDTO: {
            categoryId: "",
            categoryName: "",
            categoryImage: ""
        },
        reviewList: [
            {comment: "", rating: 0},
            {comment: "", rating: 0},
            {comment: "", rating: 0}
        ]
    };


    useEffect(() => {
        ProductService.getProductByCategory(categoryName)
            .then(item => {
                // console.log(item);
                // productItemList.push(item);
            }).catch(error => {
            console.error('Error changing cart data:', error);
        });
    }, [dispatch]);
    const productItemList = [
        {
            productNumber:"",
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategoryDTO: {
                categoryId: "",
                categoryName: "Mobile",
                categoryImage: "https://images.inc.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        },
        {
            productNumber:"",
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategoryDTO: {
                categoryId: "",
                categoryName: "Mobile",
                categoryImage: "https://hips.hearstapps.com/hmg-prod/images/pile-of-books-with-pages-open-by-wind-royalty-free-image-1600785994.jpg?crop=0.79555xw:1xh;center,top&resize=2048:*"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        },
        {
            productNumber:"",
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategoryDTO: {
                categoryId: "",
                categoryName: "Mobile",
                categoryImage: "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        }
    ]

    const handleNextCLick = () => {
        alert("Next coming soon :)");
    }
    const handlePreviousClick = () => {
        alert("Previous coming soon :)");
    }
    return (
        <div className="category-frame">
            <h3>{categoryName}</h3>
            <ProductFrame itemList={productItemList} onPrevious={handlePreviousClick} onNext={handleNextCLick}/>
        </div>
    )
}
export default CategoryFrame;