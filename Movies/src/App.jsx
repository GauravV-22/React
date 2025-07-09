import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieGrid from './components/MovieGrid'
import MovieDetails from './components/MovieDetails'
import NavBar from './components/NavBar'

function App() {
  return (
   
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<MovieGrid/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
    </Router>
  )
}

export default App;
