import { Link } from "react-router-dom";
import Logo from "./../../../assets/Logo_ML@2x.png"
import Search from "./Search"


/**
 * @description renderiza la cabecera del sitio
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*}  {JSX.Element}
 */
const Header = (): JSX.Element => {
	return (
		<header className='mel-header'>
			<nav>
				<div className="container-logo">
				<Link to={'/'}><img src={Logo} alt="Logo" className="logo" /></Link>
				</div>
					<Search></Search>
      </nav>
		</header>
	)
}

export default Header