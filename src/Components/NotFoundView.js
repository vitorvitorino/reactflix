import React from 'react'
import Hero from './Hero'

const NotFoundView = () => {
    return (
        <>
        <Hero text='404 page' />
        <div className='container my-5'>
            <h1 className='text-center'>Error 404 my dude</h1>
        </div>
        </>
    )
}

export default NotFoundView