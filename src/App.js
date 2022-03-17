import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ShipList from './pages/ShipList/ShipList';
import StarshipPage from './components/StarshipPage/StarshipPage';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {name: 'Star Wars Starships'},
  ])

  return (
    <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/starship' element={<ShipList />}/>
        <Route path="/starship-page" element={<StarshipPage />}/>
      </Routes>
    </>
  );
}

export default App;
