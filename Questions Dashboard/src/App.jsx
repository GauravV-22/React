import {Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProblemDetail from "./components/ProblemDetails";
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
      </Routes>
  )
}

export default App;
