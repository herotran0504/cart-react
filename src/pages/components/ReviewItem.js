import RatingStar from "./RatingStar";

export const ReviewItem = ({item}) => {
    return(
        <div className="review-item">
            <div className="rating">
                <RatingStar rating={item.rating}/>
            </div>
            <div className="comment">
                {item.comment}
            </div>
        </div>
    );
}