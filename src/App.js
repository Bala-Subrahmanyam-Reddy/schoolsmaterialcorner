import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/home';
import AboutUsScreen from './pages/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}></Route>
      <Route path='/about' element={<AboutUsScreen />}></Route>
    </Routes>
  );
}

export default App;
