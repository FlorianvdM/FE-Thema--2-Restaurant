function Dish({ meal }) {
  return (
    <article>
      <h2>{meal.strMeal}</h2>
      <p>{meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
    </article>
  )
}

export default Dish