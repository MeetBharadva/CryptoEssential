import './App.css';
import { Home } from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { ArithMetic } from './pages/ArithMetic';
function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arithmetic" element={<ArithMetic />} />
      </Routes>
    </div>
  );
}

export default App;
