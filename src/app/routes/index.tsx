//  Decencies
import { Navigate, Route, Routes } from "react-router-dom"
//  Components
import { Home } from "../pages"

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
