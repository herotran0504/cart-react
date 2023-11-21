import '../../styles/rating-star.css'
import {useState} from "react";

export const StarToRate = ({handleSetRatingStar}) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (selectedRating) => {
        // Update the rating when a star is clicked
        setRating(selectedRating);
        handleSetRatingStar(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        const maxRating = 5; // You can adjust the maximum rating

        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star-to-rate ${i <= rating ? 'filled' : ''}`}
                    onClick={() => handleStarClick(i)}
                >
          ★
        </span>
            );
        }

        return stars;
    };

    return (
        <div>
            {/*<p>Rating: {rating}</p>*/}
            <div className="star-rating-to-rate">{renderStars()}</div>
        </div>
    );
};