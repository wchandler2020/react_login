 import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
      
    </div>
  );
}

export default App;
