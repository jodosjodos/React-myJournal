
import { Home } from './pages/Home'

import { Journel } from './pages/journalPage'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Journel/>} path='/my'  ></Route>
        <Route element={<h1>not found</h1>} path="*"></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App
