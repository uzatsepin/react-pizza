import {Header} from './Components';
import {Cart, Home} from './pages';
import './scss/app.scss';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setPizzas} from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas));
    })
  })
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/cart" element={<Cart />} exact/>
          </Routes>
        </div>
      </div>
  )
}

export default App;

// export default connect (
//     (state) => {
//       return {
//         items: state.pizzas.items,
//         filter: state.filters,
//       };
//     },
//     (dispatch) => {
//       return {
//         setPizzas: (items) => dispatch(setPizzas(items)),
//       }
//     }
// )(App);
