import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const {id} = useParams() //we are destructutring this so we can access it in our fetch url
  const [loading, setLaoding] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  

 useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        //console.log(error), for this command you are going to get a single drink from the API
        console.log(data)
        console.log(data.drinks)
        if (data.drinks){
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCockTail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCockTail)
        } else {
          setCocktail(null)
        }

        setLaoding(false)
      } catch (error) {
        console.log(error)
        setLaoding(false)
      }
    }

    getCocktail()
  }, [id])

  if (loading) {
    <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data '>name:</span>
            {name}
          </p>

          <p>
            <span className='drink-data '>name:</span>
            {category}
          </p>

          <p>
            <span className='drink-data '>name:</span>
            {info}
          </p>

          <p>
            <span className='drink-data'>name:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data '>name:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data '>name:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
