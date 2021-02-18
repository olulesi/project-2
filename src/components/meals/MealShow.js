import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MealShowCard from './MealShowCard'
function MealShow() {
  const [meals, setMeals] = React.useState('')
  const [categories, setCategories] = React.useState('')
  const [ingredients, setIngredients] = React.useState('')
  const similarMeals = categories.meals
  const { id } = useParams()
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const { data: similarCategories } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`)
        setIngredients(Object.keys(data.meals[0]))
        setMeals(data)
        setCategories(similarCategories)
        // console.log(Object.keys(meals.meals[0])
        console.log(ingredients)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  return (
    <MealShowCard
      key={meals.idMeal}
      meals={meals}
      similarMeals={similarMeals} />

  )
}
export default MealShow
