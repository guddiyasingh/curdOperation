
import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    
      
      <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>

    
  )
}

export default App
