import { useSelector } from 'react-redux'

type Categories = {
	categories: string[]
} 
/**
 * @description renderiza el rastro de miga del sitio
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*} 
 */
const Breadcrumbs = (): JSX.Element => {
	
	const state = useSelector((state: Categories)   => state)
	const { categories } = state 
	
	return (
		<div className='mel-breadcrumbs'>{categories.join(' > ')}</div>
	)
}

export default Breadcrumbs