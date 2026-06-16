import { useState, useEffect } from 'react'
import Dish from './Dish.jsx'

function Meals() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals)
        }
      })
  }, [])

  return (
    <section>
      {meals.map((meal) => (
        <Dish key={meal.idMeal} meal={meal} />
      ))}
    </section>
  )
}

export default Meals