import React from 'react'

//recall  that the we can use the useRef hook to set up this, search input and that means that in that case we are dealing witha controlled input just like we would have it in javascript, then we make use of the useefeect that maybe when we load the page, the input field should be focused or any other possible thing we can do alongsidethe useRef hook


import { useGlobalContext } from '../context'
const SearchForm = () => {

  const {searchTerm, setSearchTerm} = useGlobalContext()
  
  const handleSubmit=(e)=>{
      e.preventDefault()
  }
  
  return ( 
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name">Search your favorite cocktail</label>
        </div>      
        <input style={{width:'100%', height:'30px'}} value={searchTerm} type="text" id='name'  onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}/>
      </form>
    </section>
  )
}

export default SearchForm
  