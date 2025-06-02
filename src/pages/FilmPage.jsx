import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const initialMovies = [
    {
        id: 1,
        title: "Film 1",
        author: "Autore 1",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 2,
        title: "Film 2",
        author: "Autore 2",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 3,
        title: "Film 3",
        author: "Autore 3",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 4,
        title: "Film 4",
        author: "Autore 4",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 5,
        title: "Film 5",
        author: "Autore 5",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    },
    {
        id: 6,
        title: "Film 6",
        author: "Autore 6",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum dolor sit amet",
                vote: 2,
                author: "Autore 1"
            },
            {
                id: 2,
                text: "Lorem ipsum dolor sit amet",
                vote: 4,
                author: "Autore 2"
            },
            {
                id: 3,
                text: "Lorem ipsum dolor sit amet",
                vote: 3,
                author: "Autore 3"
            }
        ]
    }
];


const FilmPage = () => {
    const { id } = useParams()
    const [films, setFilms] = useState(initialMovies);
    const [film, setFilm] = useState(null)
    //function
    const fetchFilm = () => {
        films.forEach((actualFilm) => {
            if (actualFilm.id === parseInt(id)) {
                setFilm(actualFilm)
            }
        });
    };

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            <div className='row'>
                {film === null ? (
                    <p>Caricamento dati</p>
                ) : (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img className='img-fluid' src={film.image} alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1>{film.title}</h1>
                            <h3>{film.author}</h3>
                            <p>{film.excerpt}</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <h3>Our Community Reviews</h3>
                                </div>
                            </div>
                            {film.reviews.map((review) => {
                                return (
                                    <ReviewCard key={`review-${review.id}`} review={review} />
                                )
                            })}

                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default FilmPage