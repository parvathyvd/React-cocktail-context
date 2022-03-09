import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTermSubmit} = useGlobalContext();
  const searchFocus = useRef('');
  useEffect(()=>{
    searchFocus.current.focus();
  },[])

  return (
    <section className="section-search mt-2">
      <div className='search-form'>
        <div className="form-control">
          <label htmlFor='name'>Search your favourite Cocktail</label>
        <input type="text" id="name" placeholder='Search your drink' onChange={(e)=> searchTermSubmit(e.target.value)} ref={searchFocus}/>
        </div>
      </div>
    </section>
    
  )
}

export default SearchForm
