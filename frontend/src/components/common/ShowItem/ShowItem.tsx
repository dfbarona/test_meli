import React from 'react';
import './scss/styles.scss';

import { Item } from '../../../interfaces/item';
import { currency, openNotification } from '../../../utils';
import { URL_IMAGE } from '../../../config/enviroments';

interface Props {
	item: Item;
}

/**
 * @description renderiza la información de un item o articulo
 * @author David Barona <davidfbarona@gmail.com>
 * @date 14/07/2022
 * @param {Props} {item}
 * @return {*}  {JSX.Element}
 */
const ShowItem = ({ item }: Props): JSX.Element => {
	const handleClick = () => {
		openNotification('info', 'Muchas gracias por su compra!');
	};

	return (
		<div className="show-item">
			<div className="show-item-info">
				<img
					className="img-content"
					src={`${URL_IMAGE}/D_NQ_NP_${item.picture_id}-F.jpg`}
					alt={`Item ${item.title}`}
				/>
				<div className="item-title-description">Descripción del producto</div>
				<div className="item-description">{item.description}</div>
			</div>
			<div className="show-item-content">
				<div className="sold-quantity">{`${item.condition} - ${item.sold_quantity} vendidos`}</div>
				<div className="title">{item.title}</div>
				<div className="mount">
					{currency(item.price.amount, item.price.currency, 0)}
				</div>
				<button className="btn-comprar" onClick={handleClick}>
					Comprar
				</button>
			</div>
		</div>
	);
};

export default ShowItem;
