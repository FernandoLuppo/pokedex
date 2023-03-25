import type { IPokemonFistVideo } from "../interfaces"
import { Api } from "../services"

const getById = async (
  pokemon: string | number
): Promise<IPokemonFistVideo | Error> => {
  try {
    const { data } = await Api.get(`/pokemon/${pokemon}`)
    if (data !== null) return data

    return new Error("Error to try get the Pokemon.")
  } catch (error) {
    return new Error(
      ((error as { message: string }).message = "Este Pokemon não existe")
    )
  }
}

export const usePokemon = {
  getById
}
