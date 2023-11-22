export const getAvgRating = (productItem) => {
    const numOfRating = productItem.reviewDTOList.length;
    const totalRating = productItem.reviewDTOList.reduce((acc, curValue) => {
        return acc + curValue.rating
    }, 0);
    return productItem.reviewDTOList.length > 0 ? Math.floor(totalRating / numOfRating + 0.5) : 0;
}

export const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export const upperCaseFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}