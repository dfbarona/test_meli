import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { Item } from '../../../interfaces/item';

import ShowItem from '../../common/ShowItem';
import SkeletonShowItem from '../../common/ShowItem/SkeletonShowItem';

/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @return {*}  {JSX.Element}
 */
const ItemDetails = (): JSX.Element => {
	const { id } = useParams();

	const { data, status } = useFetch(`/items/${id}`);

	return (
		<>
			{status !== 'fetched' ? (
				<>
					<SkeletonShowItem />
				</>
			) : (
				<ShowItem item={data as Item}></ShowItem>
			)}
		</>
	);
};

export default ItemDetails;
