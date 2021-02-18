import React from 'react'
import { Link } from 'react-router-dom'
function MealCard({ strMeal, strMealThumb, idMeal }) {
  const [isdelete, setIsDelete] = React.useState(false)
  const handleDelete = () => {
    setIsDelete(!isdelete)
  }
  return (
    <div className="card-column column is-one-third-desktop is-half-tablet column-slide" >
      { !isdelete && <div className="card size">
        <Link to={`/meals/${idMeal}`}>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={strMealThumb} alt={strMeal} />
            </figure>
          </div>
        </Link>
        <div className="card-header">
          <div className="card-header-title">{strMeal}</div>
          <button className="button yuck" onClick={handleDelete}>YUCK!</button> 
        </div> 
      </div>}
    </div>
  )
}
export default MealCard