import RatingStar from "./RatingStar";

export const ReviewItem = ({item}) => {
    return(
        <div className="review-item">
            <ul className="list-items-vertical">
                <li key={0}>
                    <div className="rating">
                        <RatingStar rating={item.rating}/>
                    </div>
                </li>
                <li key={1}>
                    <div className="comment">
                        {item.comment}
                    </div>
                </li>
            </ul>
        </div>
    );
}