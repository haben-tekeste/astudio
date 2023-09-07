import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'


// pages
import Users from './pages/Users'
import Products from './pages/Products'

// components
import Nav from './components/Nav'


function App() {
  const {pathname} = useLocation()
  return (
    <>
      <Nav pathname={pathname}/>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />}/>
      </Routes>
    </>
  )
}

export default App
