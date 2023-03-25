import { FlexBox } from "../../../../shared/components"
import * as S from "./Card.styles"

interface ICard {
  id: number
  name: string
  type1: string
  type2?: string
  sprites: string
  preview: string
}

export const Card: React.FC<ICard> = ({
  id,
  name,
  type1,
  type2,
  sprites,
  preview
}) => {
  return (
    <S.Container gap="xs" align="center" justify="center" direction="column">
      <FlexBox align="center" justify="flex-end" direction="row">
        <S.PokemonText>#{id}</S.PokemonText>
      </FlexBox>
      {type2 !== "" ? (
        <FlexBox align="center" justify="space-around" direction="row">
          <S.PokemonText>{type1}</S.PokemonText>
          <S.PokemonText>{type2}</S.PokemonText>
        </FlexBox>
      ) : (
        <FlexBox align="center" justify="center" direction="row">
          <S.PokemonText>{type1}</S.PokemonText>
        </FlexBox>
      )}
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
