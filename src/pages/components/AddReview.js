import {useState} from "react";
import {StarToRate} from "./StarToRate";

export const AddReview = ({onAddReview}) => {
    const [review, setReview] = useState({comment: "", rating: 0});
    const handleAddReview = () => {
        onAddReview(review);
    }
    const handleSetRatingStar = (star) => {
        setReview({...review, rating: star});
    }
    const handleFieldChange = (e) => {
        setReview({...review, [e.target.name]: e.target.value});
    }
    return (
        <div className="add-review">
            <div className="review-container">
                <StarToRate handleSetRatingStar={handleSetRatingStar}/>
                <textarea className="review-text" name="comment" onChange={handleFieldChange}></textarea>
                <div>
                    <button className="primary-button" onClick={handleAddReview}>Add comment</button>
                </div>
            </div>
        </div>
    )
};