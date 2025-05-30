import React from 'react'

const FilmPage = () => {
    return (
        <div className='row'>
            <div className="col-12 col-md-6 col-lg-4">
                <img className='img-fluid' src="https://picsum.photos/500/300" alt="" />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>Titolo</h1>
                <h3>Autore</h3>
                <p>Excerpt</p>
            </div>
        </div>
    )
}

export default FilmPage