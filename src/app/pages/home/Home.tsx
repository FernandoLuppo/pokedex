import { useCallback, useState } from "react"
import { usePokemon } from "../../shared/hooks"
import type { IPokemon } from "../../shared/interfaces"
import { Card } from "./components"

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

    console.log(pokemon)
  }, [searchValue, setPokemon])
  console.log(pokemon)
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

      {pokemon !== undefined && (
        <Card
          name={pokemon?.name}
          sprites={pokemon.sprites.other["official-artwork"].front_default}
          key={pokemon?.name}
        />
      )}
    </main>
  )
}
