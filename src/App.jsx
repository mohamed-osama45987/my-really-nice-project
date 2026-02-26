import './App.css'
import { Routes, Route } from 'react-router'
import Layout from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import { routes } from './constants'
import VersionedHome from './components/VersionedHome'
import LoginPage from './pages/LoginPage'
import AuthProvider from './providers/AuthProvider'


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path={routes.Home} element={<Layout />} >
          <Route index element={<VersionedHome />} />
          <Route path={routes.VersionedHome} element={<VersionedHome />} />
          <Route path={routes.About} element={<About />} />
          <Route path={routes.Contact} element={<Contact />} />
          <Route path={routes.Login} element={<LoginPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
