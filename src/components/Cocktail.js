import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({idDrink, strDrink, strCategory, strDrinkThumb, strGlass}) => {
  return (
  
    <div className='cocktail'>
      <div className="img-conatienr">
      <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
      <h3>{strDrink}</h3>
      <h4>{strCategory}</h4>
      <p>{strGlass}</p>
      <Link to = {`/cocktail/${idDrink}`} className="btn btn-primary btn-details">
        Details
      </Link>
      </div>
    </div>
  )
}

export default Cocktail
