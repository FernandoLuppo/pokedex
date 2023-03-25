import { useCallback, useState } from "react"
import { usePokemon } from "../../shared/hooks"
import type { IPokemonFistVideo } from "../../shared/interfaces"
import { Card } from "./components"

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [pokemon, setPokemon] = useState<IPokemonFistVideo>()

  const handleClick = useCallback(() => {
    if (searchValue !== "") {
      usePokemon.getById(searchValue).then(res => {
        if (res instanceof Error) alert(res.message)
        else setPokemon(res)
      })
    }
  }, [searchValue, setPokemon])

  const sprites = useCallback((): string => {
    if (pokemon !== undefined) {
      const pokeSprites =
        pokemon?.sprites.other["official-artwork"].front_default
      return pokeSprites
    } else return ""
  }, [pokemon])

  const animated = useCallback((): string => {
    if (pokemon !== undefined) {
      const pokeAnimated =
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default

      console.log(pokeAnimated)

      return pokeAnimated
    } else return ""
  }, [pokemon])

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
          id={pokemon.id}
          key={pokemon?.name}
          name={pokemon?.name}
          sprites={sprites()}
          preview={animated()}
        />
      )}
    </main>
  )
}
