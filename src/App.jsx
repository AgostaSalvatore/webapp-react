import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<h1>Dettaglio Film</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
