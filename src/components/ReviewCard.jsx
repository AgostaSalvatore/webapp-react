import React from 'react'

const ReviewCard = ({ review }) => {
    const { text, vote, author } = review
    return (
        <div className="col-12">
            <div className="card p-3 bg-secondary">
                <p>{text}</p>
                <p>{vote}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default ReviewCard