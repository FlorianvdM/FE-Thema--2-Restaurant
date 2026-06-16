import { useState, useEffect } from 'react'
import Dish from './Dish.jsx'

function Meals() {
  // useState 1: bijhouden welke letter geselecteerd is (standaard 'a')
  const [letter, setLetter] = useState('a')

  // useState 2: bijhouden welke gerechten er zijn
  const [meals, setMeals] = useState([])

  // useEffect wordt uitgevoerd elke keer als 'letter' verandert
  useEffect(() => {
    // API aanroepen met de geselecteerde letter
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then((data) => {
        // meals updaten met de opgehaalde gerechten
        if (data.meals) {
          setMeals(data.meals)
        }
      })
  }, [letter]) // [letter] = useEffect draait opnieuw als 'letter' verandert

  // stijl voor de oranje ronde knoppen
  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '0 0.5rem',
  }

  return (
    <section>
      {/* Drie oranje ronde knoppen gecentreerd bovenaan */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <button style={buttonStyle} onClick={() => setLetter('a')}>A</button>
        <button style={buttonStyle} onClick={() => setLetter('b')}>B</button>
        <button style={buttonStyle} onClick={() => setLetter('c')}>C</button>
      </div>

      {/* Kaartjes in een grid van 4 kolommen */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
      }}>
        {/* Voor elk gerecht uit de state wordt een Dish component gerenderd */}
        {meals.map((meal) => (
          <Dish key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </section>
  )
}

export default Meals