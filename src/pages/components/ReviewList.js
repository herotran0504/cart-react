
import {ReviewItem} from "./ReviewItem";

export const ReviewList = ({reviewList}) => {
    return (
        <div className="review-list">
            <div className="container">
                <ul className="list-items">
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