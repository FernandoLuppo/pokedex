import type { DefaultTheme } from "styled-components"

export const DarkTheme:
  | DefaultTheme
  | ((theme: DefaultTheme) => DefaultTheme) = () => ({
  colors: {
    types: {
      normal: "#aba77a",
      fire: "#ee8130",
      water: "#6390f0",
      electric: "#f7d020",
      grass: "#7ac44c",
      ice: "#96d9d6",
      fighting: "#c22e28",
      poison: "#a33ea1",
      ground: "#e2bf65",
      flying: "#a98ff3",
      psychic: "#f95587",
      bug: "#a6b91a",
      rock: "#b6a136",
      ghost: "#735797",
      dragon: "#6f35fc",
      dark: "#705746",
      steel: "#b7b7ce",
      fairy: "#d685ad"
    },
    background: "#121212",
    dark: {
      pure: "#212121",
      1: "#1b1b1b",
      2: "#424242",
      3: "#373737"
    },
    light: {
      pure: "#ffffff",
      1: "#efeff1",
      2: "#e5e5e5",
      3: "#eaeaea"
    },
    neutral: {
      pure: "#212121",
      1: "#1b1b1b",
      2: "#424242",
      3: "#373737"
    },
    primary: "#9147ff",
    secondary: "#fec260",
    feedback: {
      error: "#cc0000",
      warning: "#ff8800",
      success: "#007e33",
      info: "#0d47a1"
    }
  },
  font: {
    colors: {
      white: "#ffffff",
      dark: "#000000",
      contrast: "#ff6d00",
      inverse: "#000000",
      pure: "#ffffff",
      1: "#fafafa",
      2: "#f5f5f5",
      3: "#eeeeee"
    }
  },
  breakpoints: {
    xsm: "360px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1350px"
  },
  transition: {
    time: "0.3s",
    type: "ease"
  },
  spacing: {
    xxxs: "4px",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
    xl: "48px",
    xxl: "56px",
    xxxl: "64px"
  }
})
