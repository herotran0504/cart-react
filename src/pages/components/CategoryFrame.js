import {useNavigate} from "react-router-dom";
import ProductFrame from "./ProductFrame";

const CategoryFrame = () => {
    const navigate = useNavigate();
    const productItemList = [
        {
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategory: {
                categoryName: "Mobile",
                categoryImage: "../mobile/Iphone11Image.jpg"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        },
        {
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategory: {
                categoryName: "Mobile",
                categoryImage: "../mobile/Iphone11Image.jpg"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        },
        {
            productName:"Iphone",
            productPrice: 900,
            productDescription: "Mobile for rich man",
            productCategory: {
                categoryName: "Mobile",
                categoryImage: "../mobile/Iphone11Image.jpg"
            },
            reviewList: [
                {comment: "What a beautiful device", rating: 5},
                {comment: "I love it", rating: 5},
                {comment: "It's too expensive", rating: 2}
            ]
        }
    ]
    const handleItemClick = (e) => {
        navigate("/productDetails");
    }
    const handleNextCLick = () => {
        alert("Next coming soon :)");
    }
    const handlePreviousClick = () => {
        alert("Previous coming soon :)");
    }
    return (
        <div className="category-frame">
            <h3>CATEGORY</h3>
            <ProductFrame itemList={productItemList} onPrevious={handlePreviousClick} onNext={handleNextCLick} itemClick={handleItemClick}/>
        </div>
    )
}
export default CategoryFrame;