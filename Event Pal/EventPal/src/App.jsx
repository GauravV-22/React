import './css/Navbar.css'
import {NavBar} from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import {CreateEvent} from './Pages/CreateEvent'
import {Calendar} from './Pages/Calendar'
import {Bookmarks} from './Pages/Bookmarks'
import store from './Redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
    <NavBar/>
    <Routes> 
        <Route  path="/" element={<Home />}/>
        <Route  path="/Create" element={<CreateEvent />}/>
        <Route  path="/Calendar" element={<Calendar />}/>
        <Route  path="/Bookmarks" element={<Bookmarks />}/>
    </Routes >
    </Provider>
    </>
  )
}

export default App
