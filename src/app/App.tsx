import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { ResetCss } from "./shared/theme/globalStyles"
import { ThemeProvider } from "styled-components"
import { DarkTheme } from "./shared/theme/darkTheme"

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
