import './App.css'
import { Routes, Route } from 'react-router-dom'

// pages
import Users from './pages/Users'
import Products from './pages/Products'

// components
import Nav from './components/Nav'


function App() {
  

  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/users' element={<Users />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
    </>
  )
}

export default App
