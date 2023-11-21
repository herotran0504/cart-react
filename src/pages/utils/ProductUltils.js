export const getAvgRating = (productItem) => {
    const numOfRating = productItem.reviewDTOList.length;
    const totalRating = productItem.reviewDTOList.reduce((acc, curValue) => {
        return acc + curValue.rating
    }, 0);
    return Math.floor(totalRating / numOfRating + 0.5);
}

export const  chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}