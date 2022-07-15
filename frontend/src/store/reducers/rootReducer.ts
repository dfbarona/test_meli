import { combineReducers } from 'redux';
import categories from './categories';

// Reducer principal de la aplicación
const rootReducer = combineReducers({
	categories,
});

export default rootReducer;