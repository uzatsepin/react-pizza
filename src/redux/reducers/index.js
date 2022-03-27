import { combineReducers } from 'redux';

import filtersReducers from './filters';
import pizzasReducers from './pizzas';

const rootReducer = combineReducers({
  pizzas: pizzasReducers,
  filters: filtersReducers,
});

export default rootReducer;
