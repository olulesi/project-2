import React from 'react'
import MealCard from './MealCard'
import ErrorCard from './ErrorCard'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
function MealIndex( ) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const searchterm = params.get('search')
  const [data, setData] = React.useState('')
  const [hasError, setHasError] = React.useState(false)
  const meals = data.meals
  const [search, setSearch] = React.useState('')
  // let searchvalue = ''
  const history = useHistory()
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchterm}`)
        setData(data)
        if (!data.meals) {
          setHasError(true)
        }
      } catch (err) {
        console.log(err)
      }
    } 
    getData()
  }, [searchterm])
  const handleFormSubmit = event => {
    event.preventDefault()
    history.push(`/meals?search=${search}`)
    setSearch('')
  }
  const handleFormChange = event => {
    setSearch(event.target.value)
  }

  return (
    <section className="section column-slide">
      <div className="container meal-search">
        <form onSubmit={handleFormSubmit}>
          <input autoFocus 
            type="text"
            placeholder="Search Your Ingredient"
            value={search}
            onChange={handleFormChange}
          />
          <button className="button">Look for Meal</button>
        </form>
        <div className="columns is-multiline">
          {meals ?
            meals.map(meal => (
              <MealCard key={meal.idMeal} {...meal} />
            ))
            :
            hasError ? <ErrorCard /> :
              <h2 className="title has-text-centered">
               ...loading 
              </h2>
          }
        </div>
      </div>
    </section>
  )
}
export default MealIndex