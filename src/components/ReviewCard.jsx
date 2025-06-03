import React from 'react'
import RenderStars from './RenderStars'

const ReviewCard = ({ review }) => {
    const { text, vote, name } = review
    return (
        <div className="col-12">
            <div className="card p-3">
                <p>{text}</p>
                <RenderStars vote={vote} />
                <p className='mt-3'>{name}</p>
            </div>
        </div>
    )
}

export default ReviewCard;