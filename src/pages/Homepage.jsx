import React from 'react'
import { useState, useEffect } from 'react'
import FilmCard from '../components/FilmCard'
import axios from 'axios'
import { useContext } from 'react'
import GlobalContext from '../context/globalContext'

const Homepage = () => {

    const [movies, setMovies] = useState([])

    const { setIsLoading } = useContext(GlobalContext)

    const fetchMovies = () => {

        setIsLoading(true);

        axios.get('http://localhost:3000/api/movies')

            .then((response) => {
                console.log(response.data)
                setMovies(response.data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1 className='text-danger'>Boolflix</h1>
            <h2>
                <i>Il tuo sito di streaming</i>
            </h2>
            <div className="row mt-4 gy-4">
                {movies.map((movie) => {
                    const { id, title, author, excerpt, image } = movie
                    return <FilmCard key={`film-${id}`} movie={movie} />
                })}

            </div>
        </>
    )
}

export default Homepage