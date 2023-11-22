
import {ReviewItem} from "./ReviewItem";
import "../../styles/review.css"

export const ReviewList = ({reviewList}) => {
    return (
        <div className="review-list">
            <div className="review-list-container">
                <ul className="list-items-vertical">
                    {reviewList.map((item) => (
                        <li key={item.reviewId}>
                            <ReviewItem item={item}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}