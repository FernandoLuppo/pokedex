import "./App.css"
import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
