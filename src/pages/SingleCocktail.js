import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  console.log('id', id)
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchItems = useCallback(async() => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${id}`);
      const result  = await response.json();
      console.log(result.drinks[0]);
      setItemDetail(result.drinks)
      setLoading(false);
      if(result === null){
        setItemDetail(null);
      }
    }
    catch(error){
      console.log(error);
      setLoading(false);
    }
  },[id])
  useEffect(()=>{
    fetchItems()
  },[id])
  if(loading){
    return <Loading/>
  }
  if(!itemDetail){
    return <h2>No Cocktails</h2>
  }

  return (

    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>{itemDetail[0].strDrink}</h2>
      <div className="drink">

      <img src={itemDetail[0].strDrinkThumb} alt={itemDetail[0].strDrink}/>
      <div className="drink-info">
        <p>
          <span className='drink-data'>name: </span>
          {itemDetail[0].strDrink}
        </p>
        <p>
          <span className='drink-data'>info: </span>
          {itemDetail[0].strInstructions}
        </p>
        <p>
          <span className='drink-data'>glass: </span>
          {itemDetail[0].strGalss}
        </p>
        <p>
          <span className='drink-data'>Category: </span>
          {itemDetail[0].strAlcoholic}
        </p>
        <p><span className='drink-data'>Ingredients :</span>
        <span>{itemDetail[0].strIngredient1 != null ? itemDetail[0].strIngredient1 : ''}</span>
        <span>{itemDetail[0].strIngredient2 != null ? itemDetail[0].strIngredient2 : ''}</span>
        <span>{itemDetail[0].strIngredient3 != null ? itemDetail[0].strIngredient3 : ''}</span>
        <span>{itemDetail[0].strIngredient4 != null ? itemDetail[0].strIngredient4 : ''}</span>
        <span>{itemDetail[0].strIngredient5 != null ? itemDetail[0].strIngredient5 : ''}</span>
        </p>
      </div>
      </div>
    </section>
  )
}

export default SingleCocktail
