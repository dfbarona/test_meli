import Logo from "./../../../assets/Logo_ML@2x.png"
import Search from "./Search"

const Header = () => {
	return (
		<header className='mel-header'>
			<nav>
				<div className="container-logo">
					<img src={Logo} alt="Logo" className="logo" />
				</div>
					<Search></Search>
      </nav>
		</header>
	)
}

export default Header