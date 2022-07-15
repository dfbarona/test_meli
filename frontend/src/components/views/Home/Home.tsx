import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import categories from '../../../store/actions/categories';

/**
 * @description renderiza la vista para el Home
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*}  {JSX.Element}
 */
const Home = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(categories([]));
	}, []);

	return <></>;
};

export default Home;
