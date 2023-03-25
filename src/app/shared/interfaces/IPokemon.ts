export interface IPokemonFistVideo {
  id: number
  name: string
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string
          }
        }
      }
    }
  }
  types: [{ type: { name: string } }, { type: { name: string } }]
}
