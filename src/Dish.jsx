import { useState } from 'react' // useState hook importeren uit React

function Dish({ meal }) {
  // titel = de huidige waarde van de state
  // setTitel = de functie om de state te updaten
  // useState(meal.strMeal) = de initiële waarde is de titel van het gerecht uit de API
  const [titel, setTitel] = useState(meal.strMeal)

  return (
    // lichtblauw kaartje met donkerblauwe rand en afgeronde hoeken
    <article style={{
      backgroundColor: '#add8e6',
      border: '2px solid #4a6fa5',
      borderRadius: '16px',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>

      {/* De titel wordt weergegeven vanuit de state, niet rechtstreeks uit de API */}
      <h2 style={{ fontSize: '1.2rem', fontFamily: 'monospace', marginBottom: '0.5rem' }}>{titel}</h2>

      {/* Potlood icoontje waarop geklikt kan worden om de titel aan te passen */}
      <span
        onClick={() => {
          // prompt() opent een invoerveld in de browser
          // de huidige titel wordt als standaardwaarde meegegeven
          const nieuweNaam = prompt('Vul een nieuwe naam in:', titel)

          // alleen updaten als de gebruiker iets heeft ingevuld (en niet op annuleren heeft geklikt)
          if (nieuweNaam) setTitel(nieuweNaam)
        }}
        style={{ cursor: 'pointer', fontSize: '1.2rem', marginBottom: '1rem' }}
      >
        ✏️
      </span>

      {/* Instructies van het gerecht in kleiner lettertype */}
      <p style={{ fontSize: '0.85rem', fontFamily: 'monospace', marginBottom: '1rem' }}>{meal.strInstructions}</p>

      {/* Afbeelding van het gerecht op volledige breedte van het kaartje */}
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: '100%', borderRadius: '8px' }}
      />
    </article>
  )
}

export default Dish