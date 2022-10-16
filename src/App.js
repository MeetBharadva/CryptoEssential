import './App.css';
import { Home } from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="example-box">
      <div className="background-shapes"></div>
      <ToastContainer />
      <Home />
    </div>
  );
}

export default App;
