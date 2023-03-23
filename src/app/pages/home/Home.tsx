import { useCallback, useState } from "react"
import { usePokemon } from "../../shared/hooks"
import type { IPokemon } from "../../shared/interfaces"

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [pokemon, setPokemon] = useState<IPokemon>()

  const handleClick = useCallback(() => {
    if (searchValue !== "") {
      usePokemon.getById(searchValue).then(res => {
        if (res instanceof Error) alert(res.message)
        else setPokemon(res)
      })
    }
  }, [searchValue, setPokemon])

  return (
    <main>
      <div>
        <input
          type="text"
          onChange={e => {
            setSearchValue(e.target.value)
          }}
        />
        <button onClick={handleClick}>Procurar</button>
      </div>

      {pokemon !== null && (
        <div key={pokemon?.name}>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <h3>{pokemon?.name}</h3>
        </div>
      )}
    </main>
  )
}
