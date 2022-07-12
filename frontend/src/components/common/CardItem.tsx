import { Link } from "react-router-dom";
import { Item } from "../../interfaces/item";
import IconFreeShipping from "./../../assets/ic_shipping@2x.png";

interface Props {
	item: Item
}

const CardItem = ({item}: Props) => {
	return (
		<p>
			<Link to={`/items/${item.id}`}><img className="imgItem" src={item.picture} alt={`Item ${item.title}`} /></Link>
			<Link to={`/items/${item.id}`}>{item.title}</Link>
			<Link to={`/items/${item.id}`}><span>{item.price.amount} </span></Link>
			{item.free_shipping && <img src={IconFreeShipping} alt="Free Shipping" />}
			<span>{item.state_name}</span>
		</p>
	)
}

export default CardItem