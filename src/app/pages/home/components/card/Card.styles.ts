import styled from "styled-components"
import { FlexBox } from "../../../../shared/components"

export const Container = styled(FlexBox)`
  max-width: 225px;
  height: 350px;
  background-color: ${props => props.theme.colors.neutral.pure};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24);
  padding: 10px;
`
export const PokemonSpot = styled(FlexBox)`
  background-color: #f7f7f7;
  border-radius: 100%;
  width: 160px;
  height: 160px;
`
export const PokemonSprit = styled.img`
  height: 200px;
  width: 200px;
`
export const PokemonText = styled.span`
  color: #f7f7f7;
  font-size: 1.25em;
  font-weight: bold;
`
