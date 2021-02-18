import React from 'react'
import axios from 'axios'
import MealShowCard from './MealShowCard'

function MealRandomShow() {
  const [meals, setMeals] = React.useState('')
  const [categories, setCategories] = React.useState('')
  const similarMeals = categories.meals
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        const { data: similarCategories } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`)
        setMeals(data)
        setCategories(similarCategories)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  return (
    <MealShowCard 
      key={meals.idMeal}
      meals={meals}
      similarMeals={similarMeals} />
  )
}
export default MealRandomShow