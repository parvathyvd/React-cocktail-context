import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,items} = useGlobalContext();
  console.log('iniside cocktaillist',items)
  if(loading){
    return <Loading/>
  }
  if(items === null){
    return <div className='section-center'><p>No Cocktails matched with your search criteria</p></div>
  }

  
  return (
    <section className='section'>
      <h2 className="setion-title text-center">
        Cocktails
      </h2>
      <div className="cocktails-center">
      {items.map((item,index) => {
      return <Cocktail key={index} {...item}/>
      })}
      </div>
    </section>
  )
}

export default CocktailList
