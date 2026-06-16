import { useState } from 'react' // useState hook importeren uit React

function Dish({ meal }) {
  // useState hook aanmaken
  // titel = de huidige waarde van de state
  // setTitel = de functie om de state te updaten
  // useState(meal.strMeal) = de initiële waarde is de titel van het gerecht uit de API
  const [titel, setTitel] = useState(meal.strMeal)

  return (
    <article>
      {/* De titel wordt weergegeven vanuit de state, niet rechtstreeks uit de API */}
      <h2>{titel}</h2>

      {/* Potlood icoontje waarop geklikt kan worden om de titel aan te passen */}
      <span
        onClick={() => {
          // prompt() opent een invoerveld in de browser
          // de huidige titel wordt als standaardwaarde meegegeven
          const nieuweNaam = prompt('Vul een nieuwe naam in:', titel)

          // alleen updaten als de gebruiker iets heeft ingevuld (en niet op annuleren heeft geklikt)
          if (nieuweNaam) setTitel(nieuweNaam)
        }}
        style={{ cursor: 'pointer', fontSize: '1.2rem' }}
      >
        ✏️
      </span>

      <p>{meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
    </article>
  )
}

export default Dish