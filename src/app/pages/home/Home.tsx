//  Components
import { Card } from "./components"
// Hooks
import { useCallback, useState } from "react"
import { usePokemon } from "../../shared/hooks"
//  Types
import type { IPokemonFistVideo } from "../../shared/interfaces"

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

  const sprites = useCallback(
    (value: string): string => {
      if (pokemon !== undefined) {
        switch (value) {
          case "sprites":
            return pokemon.sprites.other["official-artwork"].front_default

          case "animated":
            return pokemon.sprites.versions["generation-v"]["black-white"]
              .animated.front_default

          case "type1":
            return pokemon.types[0].type.name

          case "type2":
            if (pokemon.types[1] !== undefined)
              return pokemon.types[1].type.name
            else return ""
          default:
            return ""
        }
      } else return ""
    },
    [pokemon]
  )

  return (
    <main>
      <div>
        <input
          type="text"
          onChange={e => {
            setSearchValue(e.target.value.toLocaleLowerCase())
          }}
        />
        <button onClick={handleClick}>Procurar</button>
      </div>

      {pokemon !== undefined && (
        <Card
          id={pokemon.id}
          key={pokemon?.name}
          type1={sprites("type1")}
          type2={sprites("type2")}
          name={pokemon?.name}
          sprites={sprites("sprites")}
          preview={sprites("animated")}
        />
      )}
    </main>
  )
}
