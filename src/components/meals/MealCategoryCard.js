import React from 'react'
import { Link } from 'react-router-dom'
function MealCategoryCard({ strMeal, strMealThumb, idMeal }) {
  return (
    <div className="column">
      <Link to={`/meals/${idMeal}`}>
        <div className="card size">
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={strMealThumb} alt={strMeal} />
            </figure>
          </div>
          <div className="card-header">
            <div className="card-header-title">{strMeal}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default MealCategoryCard