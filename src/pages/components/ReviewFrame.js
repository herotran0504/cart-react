import {ReviewList} from "./ReviewList";
import {AddReview} from "./AddReview";

const ReviewFrame = ({reviewList, onAddComment}) => {
    return (
        <div className="review-frame">
            <div className="container">
                <div>
                    <ReviewList reviewList={reviewList}/>
                </div>
                <div>
                    <AddReview onAddComment={onAddComment}/>
                </div>
            </div>
        </div>
    )
}
export default ReviewFrame;