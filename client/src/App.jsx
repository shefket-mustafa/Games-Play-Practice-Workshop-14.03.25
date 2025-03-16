import {Route, Routes} from 'react-router'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

import './App.css'
import Create from './components/create/Create'
import Games from './components/games/Games'
import Edit from './components/edit/Edit'
import Details from './components/details/Details'

function App() {
  

  return (
    <div id="box">
    <Header />
    
    <main id="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/create' element={<Create />} />
        <Route path='/games/:gameId/details' element={<Details />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/details' element={<Details />} />

      </Routes>
    
    </main>


    </div>
  )
}

export default App
