export const getAvgRating = (productItem) => {
    const numOfRating = productItem.reviewDTOList.length;
    const totalRating = productItem.reviewDTOList.reduce((acc, curValue) => {
        return acc + curValue.rating
    }, 0);
    return Math.floor(totalRating / numOfRating + 0.5);
}