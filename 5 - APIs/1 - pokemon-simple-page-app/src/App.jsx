import { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './components/PokemonCard'
import './index.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        const results = response.data.results

        // Busca os detalhes de cada Pokémon
        const detailed = await Promise.all(
          results.map(pokemon => axios.get(pokemon.url).then(res => res.data))
        )

        setPokemons(detailed)
      } catch (err) {
        console.error("Erro ao buscar pokémons:", err)
      }
    }

    fetchPokemons()
  }, [])

  const filteredPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <input
        type="text"
        placeholder="Buscar pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="pokemon-list">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default App