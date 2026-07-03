import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard'

function App() {
  const isLoggedIn = false;
  let data = {
    'msg' : 'User Not Logged In'
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar /> <br /> <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseName' element={<Course />} />
          <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace state={data} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
