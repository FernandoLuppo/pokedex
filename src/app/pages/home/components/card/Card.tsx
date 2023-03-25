import { FlexBox } from "../../../../shared/components"
import type { TPokemonType } from "../../../../shared/interfaces"
import * as S from "./Card.styles"

interface ICard {
  id: number
  name: string
  type: TPokemonType
  sprites: string
  preview?: string
}

export const Card: React.FC<ICard> = ({ id, name, sprites, preview }) => {
  return (
    <S.Container gap="xs" align="center" justify="center" direction="column">
      <FlexBox align="center" justify="flex-end" direction="row">
        <S.PokemonText>#{id}</S.PokemonText>
      </FlexBox>
      <S.PokemonSpot align="center" justify="center" direction="column">
        <S.PokemonSprit src={sprites} alt={name} />
      </S.PokemonSpot>
      <FlexBox align="center" justify="space-between" direction="row">
        <S.PokemonText>{name}</S.PokemonText>
        {preview !== undefined && <img src={preview} alt={name} />}
      </FlexBox>
    </S.Container>
  )
}
