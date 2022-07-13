import './scss/styles.scss';

import { Link } from "react-router-dom";
import { Item } from "../../../interfaces/item";
import IconFreeShipping from "./../../../assets/ic_shipping@2x.png";

interface Props {
	item: Item
}

/**
 * @description renderiza una tarjeta para un item o articulo
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @param {Props} {item}
 * @return {*}  {JSX.Element}
 */
const CardItem = ({item}: Props): JSX.Element => {
	return (
		<div className='card-item'>
			<div className='card-item-img'>	
				<Link to={`/items/${item.id}`}><img className="imgItem" src={item.picture} alt={`Item ${item.title}`} /></Link>
			</div>
			<div className='card-item-content'>
				<div className='item-price'>
					<span className='amount'><Link to={`/items/${item.id}`}>{item.price.amount}</Link></span>
					{item.free_shipping && <img className="item-shipping" src={IconFreeShipping} alt="Free Shipping" />}
				</div>

				<div className='item-title'><Link to={`/items/${item.id}`}>{item.title}</Link></div>
			</div>
			<div className='card-item-state'>{item.state_name}</div>
		</div>
	)
}

export default CardItem