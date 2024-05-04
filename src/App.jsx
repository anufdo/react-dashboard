import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Layout from './components/shared/Layout'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/login" element={<div>Login page</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default App
