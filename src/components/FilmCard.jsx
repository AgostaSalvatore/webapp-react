import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({ movie }) => {
    const { id, title, author, excerpt, image } = movie
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={`film-${id}`}>
            <div className="card">
                <div className="card-image-top">
                    <img
                        className='img-fluid'
                        src={image}
                        alt="" />
                </div>
                <div className="card-body">
                    <h3 className="text-primary">{title}</h3>
                    <h4>
                        <em>{author}</em>
                    </h4>
                    <p>
                        {excerpt}
                    </p>
                    <Link to={`/movie/${id}`} className="btn btn-primary">More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default FilmCard