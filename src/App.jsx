import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculadora from "./pages/Calculadora";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Calculadora/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
