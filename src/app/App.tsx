//  Dependencies
import { BrowserRouter } from "react-router-dom"
//  Components
import { AppRoutes } from "./routes"
//  Theme
import { ResetCss } from "./shared/theme/globalStyles"
import { DarkTheme } from "./shared/theme/darkTheme"
import { ThemeProvider } from "styled-components"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <BrowserRouter>
        <ResetCss />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
