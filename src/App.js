import './App.css';
import ItemList from './components/ItemList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import Sidebar from './components/Sidebar';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' />
        </Routes>
        <Routes>
          <Route path="/Daily-Tools" element={<Home />} />
          <Route path="/Todo/" element={<ItemList />}/>
          <Route path="/Calculator/" element={<Calculator />}/>
          <Route path="/Timer/" element={<Timer />} />
          <Route path="/Register/" element={<Register/>} />
          <Route path="/Login/" element={<Login/>} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
