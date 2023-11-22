import {ReviewList} from "./ReviewList";
import {AddReview} from "./AddReview";

const ReviewFrame = ({reviewList, onAddReview}) => {
    return (
        <div className="review-frame">
            <ReviewList reviewList={reviewList}/>
            <AddReview onAddReview={onAddReview}/>
        </div>
    )
}
export default ReviewFrame;