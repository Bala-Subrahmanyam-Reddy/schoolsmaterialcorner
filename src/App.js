import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}></Route>
    </Routes>
  );
}

export default App;
