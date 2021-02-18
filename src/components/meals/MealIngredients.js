import React from 'react'


function MealIngredients({ meals }) {
  // * Creating an array from the object keys
  const ingredients = () => {
    const final = []
    for (const i in meals[0]) { // * Using a for in loop (loops an object by keys)
      if (i.startsWith('strIng') && meals[0][i]) { // * if the key starts with strIng, and has a valuem, push it into the array
        final.push(meals[0][i])
      }
    }
    return final // * return that final array to be used and mapped over
  }
  return (
    <div className="ingredientsSection">
      <div>
        <h4 className="title is-4">Ingredients</h4>
      </div>
      <div className="ingredients">
        {ingredients().map(ing => {
          return <p key={ing[ing]} className="card-content">{ing}</p>
        })}

        
      </div>

    </div>
  )
}
export default MealIngredients