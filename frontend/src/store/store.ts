import configureStore from './configureStore';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let store: any = null;


/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 14/07/2022
 * @return {*}  {*}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStore = (): any => {
	if ( store === null ) {
		const result = configureStore();
		store = result.store;
	}
	return { store };
};

export default getStore;