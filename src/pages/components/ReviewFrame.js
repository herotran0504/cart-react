import {ReviewList} from "./ReviewList";
import {AddReview} from "./AddReview";

const ReviewFrame = ({reviewList, onAddReview}) => {
    return (
        <div className="review-frame">
            <div className="container">
                <div>
                    <ReviewList reviewList={reviewList}/>
                </div>
                <div>
                    <AddReview onAddReview={onAddReview}/>
                </div>
            </div>
        </div>
    )
}
export default ReviewFrame;