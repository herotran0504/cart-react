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
            <div className="container">
                <div>
                    <StarToRate handleSetRatingStar={handleSetRatingStar}/>
                </div>
                <div>
                    <textarea className="review-text" name="comment" onChange={handleFieldChange}></textarea>
                </div>
                <div>
                    <button className="btn-comment" onClick={handleAddReview}>Add comment</button>
                </div>
            </div>
        </div>
    )
};