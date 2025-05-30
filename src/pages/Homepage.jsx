import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FilmCard from '../components/FilmCard'

//array film
const initialMovies = [
    {
        id: 1,
        title: "Film 1",
        author: "Autore 1",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 2,
        title: "Film 2",
        author: "Autore 2",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 3,
        title: "Film 3",
        author: "Autore 3",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 4,
        title: "Film 4",
        author: "Autore 4",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 5,
        title: "Film 5",
        author: "Autore 5",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    },
    {
        id: 6,
        title: "Film 6",
        author: "Autore 6",
        excerpt: "Lorem Ipsum dolor sit amet",
        image: "https://picsum.photos/500/300"
    }
]

const Homepage = () => {

    const [movies, setMovies] = useState(initialMovies)


    return (
        <>
            <h1 className='text-danger'>Boolflix</h1>
            <h2>
                <i>Il tuo sito di streaming</i>
            </h2>
            <div className="row mt-4 gy-4">
                {movies.map((movie) => {
                    const { id, title, author, excerpt, image } = movie
                    return <FilmCard key={id} movie={movie} />
                })}

            </div>
        </>
    )
}

export default Homepage