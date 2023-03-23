import { Navigate, Route, Routes } from "react-router-dom"
import { Home, PageNotFound } from "../pages"

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<PageNotFound />} />

      <Route path="/*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
