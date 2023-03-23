import styled from "styled-components"
import type { DefaultTheme } from "styled-components"

const themeXl = ({ theme }: { theme: DefaultTheme }): string => {
  return theme?.breakpoints?.xl
}
const themeLg = ({ theme }: { theme: DefaultTheme }): string => {
  return theme?.breakpoints?.lg
}
const themeMd = ({ theme }: { theme: DefaultTheme }): string => {
  return theme?.breakpoints?.md
}
const themeSm = ({ theme }: { theme: DefaultTheme }): string => {
  return theme?.breakpoints?.sm
}

export const Container = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1320px;
  padding: 0px;
  @media (max-width: ${themeXl}) {
    max-width: 1140px;
    padding: 0px 25px;
  }
  @media (max-width: ${themeLg}) {
    max-width: 960px;
  }
  @media (max-width: ${themeMd}) {
    max-width: 720px;
    padding: 0px 15px;
  }
  @media (max-width: ${themeSm}) {
    max-width: 100%;
  }
`
