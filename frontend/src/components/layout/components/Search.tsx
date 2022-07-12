import IconoSearch from "./../../../assets/ic_Search@2x.png";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {

	//const [params] = useSearchParams()
  //const query = params.get('search')

	const search = useRef<HTMLInputElement>(null);
	const navigate = useNavigate()
	
	const redirectSearch = () => navigate(`/items?search=${search?.current?.value}`)
	
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
				<input type="text"  ref={search} placeholder="Nunca dejes de buscar" onKeyDown={handleKeyDown} />
			</div>
			<button className="input-group-icon" onClick={handleClick}>
					<img src={IconoSearch} alt="Search" />
			</button>
		</div>
	)
}

export default Search