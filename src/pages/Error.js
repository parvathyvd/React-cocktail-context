import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page-section mx-auto'>
      <div className="error-container">
      <h2>Oops! You are in the wrong page!</h2>
      <Link to = '/'>
      <button className='btn'>Back to Home</button>
      </Link>
      </div>
     
    </section>
  )
}

export default Error
