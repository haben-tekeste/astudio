import './App.css'
import { Routes, Route } from 'react-router-dom'

// pages
import Users from './pages/Users'
import Products from './pages/Products'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/home/users' element={<Users />}/>
        <Route path='/home/products' element={<Products />}/>
      </Routes>
    </>
  )
}

export default App
