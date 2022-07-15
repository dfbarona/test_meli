import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 14/07/2022
 * @return {*}  {*}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const configureStore = (): any => {
	// Allow multiple enhancers
	const store = createStore(rootReducer);

	return { store };
};

export default configureStore;
