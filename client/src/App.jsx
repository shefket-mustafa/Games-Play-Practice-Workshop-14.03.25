
import { Routes, Route } from 'react-router'

import UserProvider from './providers/UserProvider'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import Logout from './components/logout/Logout'
import './App.css'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'
import Admin from './components/admin/Admin'


function App() {
   

    return (
        <UserProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/games" element={<GameCatalog />} />
                        <Route element={<AuthGuard/> }>
                            <Route index element={<GameCreate/>}/>
                        <Route path="/games/:gameId/details" element={<GameDetails />} />
                        <Route path="/games/:gameId/edit" element={<GameEdit />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/admin" element={<Admin />} />
                        </Route>
                        <Route element={<GuestGuard/>}>

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </UserProvider>
    )
}

export default App
