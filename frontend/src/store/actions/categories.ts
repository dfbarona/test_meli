export interface ReduxState {
	type: string;
	payload: {
		categories: string[];
	};
}

export const type = 'add';

/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 14/07/2022
 * @param {string[]} categories
 * @return {*}  {ReduxState}
 */
export const categories = (categories: string[]): ReduxState => {
	return {
		type,
		payload: {
			categories: categories,
		},
	};
};

export default categories;
