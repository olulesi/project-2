import React from 'react'
import { useHistory } from 'react-router-dom'
function Home() {
  const [search, setSearch] = React.useState('')
  // let searchvalue = ''
  const history = useHistory()
  const handleFormSubmit = event => {
    event.preventDefault()
    history.push(`/meals?search=${search}`)
  }
  const handleFormChange = event => {
    setSearch(event.target.value)
  }
  const handleRandomise = event => {
    event.preventDefault()
    history.push('/meals/random')
  }
  return (
    <>
      <section className="homepage">
        <div className="home-animation">
          <h1>Whats in Your Fridge?</h1>
          <form onSubmit={handleFormSubmit}>
            <input autoFocus 
              type="text"
              placeholder="Search Your Ingredient"
              onChange={handleFormChange}
              value={search}
            />
            <i className="fas fa-search"></i>
            <br/>
            <div className="buttons"> 
              <button className="button"
                value="random">Look for Meal</button>
              <button onClick={handleRandomise} className="button randomise"
                value="random">My Fridge is Full!</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Home
