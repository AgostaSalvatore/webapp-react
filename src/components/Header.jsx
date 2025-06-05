import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar bg-danger mb-4'>
            <div className="container-fluid">
                <Link className='navbar-brand text-dark fs-3' to="/">Home</Link>
                <Link className='navbar-brand text-dark fs-3' to="/movie/create">Create Movie</Link>
            </div>
        </nav>
    )
}

export default Header