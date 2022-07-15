type actionReducer = {
	type: string;
	payload: {
		categories: string[];
	};
};

/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 14/07/2022
 * @param {[]} [state=[]]
 * @param {actionReducer} action
 * @return {*}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const categoriesReducer = (state: [] = [], action: actionReducer): any => {
	switch (action.type) {
		case 'add':
			return action.payload.categories;
		default:
			return state;
	}
};

export default categoriesReducer;
