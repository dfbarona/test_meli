import IconoSearch from "./../../../assets/ic_Search@2x.png";
import { useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


/**
 * @description renderiza la caja de busqueda principal
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*} 
 */
const Search = (): JSX.Element => {

	const [params] = useSearchParams()
  const query = params.get('search')
	
	const searchRef = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate()
	
	const redirectSearch = () => navigate(`/items?search=${searchRef?.current?.value}`)
	
	const handleClick = () => {
		redirectSearch()
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			redirectSearch()
    }
	}

	return (
		<div className="input-group">
			<div className="input-group-area">
				<input type="text" ref={searchRef} placeholder="Nunca dejes de buscar" onKeyDown={handleKeyDown} />
			</div>
			<button className="input-group-icon" onClick={handleClick}>
					<img src={IconoSearch} alt="Search" />
			</button>
		</div>
	)
}

export default Search