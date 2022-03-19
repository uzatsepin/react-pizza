import { Header } from './Components';
import { Home, Cart } from './pages';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      try {
        const response = await axios.get('http://localhost:3000/db.json');
        setPizzas(response.data.pizzas);
      } catch (error) {
        console.error(error);
      }
    }
    getPizzas();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
