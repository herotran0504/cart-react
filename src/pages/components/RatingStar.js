import React from 'react';
import "../../styles/rating-star.css";

const RatingStar = ({rating}) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Render full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="rating-star"/>);
        }

        // Render half star if needed
        if (hasHalfStar) {
            stars.push(<span key="half" className="rating-star half"/>);
        }

        // Render empty stars to fill the container
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="rating-star empty"/>);
        }

        return stars;
    };

    return <div className="rating-container">{renderStars()}</div>;
};

export default RatingStar;