import {useState} from "react";

export const AddReview = ({onAddReview}) => {
    const [review, setReview] = useState({comment: "", rating: 0});
    const handleAddReview = () => {
        onAddReview(review);
    }
    const handleFieldChange = (e) => {
        setReview({...review, [e.target.name]: e.target.value});
    }
    return (
        <div className="add-review">
            <div className="container">
                <div>
                    Rating:
                    <select name="rating" onChange={handleFieldChange}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
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