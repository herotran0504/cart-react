export const AddReview = ({onAddComment}) => {
    return (
        <div className="add-review">
            <div className="container">
                <div>
                    <textarea className="review-text"></textarea>
                </div>
                <div>
                    <button className="btn-comment" onClick={onAddComment}>Add comment</button>
                </div>
            </div>
        </div>
    )
};