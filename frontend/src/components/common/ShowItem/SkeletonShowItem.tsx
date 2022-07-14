import './scss/styles.scss';

import Skeleton from 'react-loading-skeleton'

/**
 * @description renderiza el skeleton para la info de un item o articulo
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @return {*}  {JSX.Element}
 */
const SkeletonShowItem = (): JSX.Element => {
	return (
		<div className='show-item'>
			<div className='show-item-info'>
				<Skeleton width={680} height={680}/>
				<div className='item-title-description'><Skeleton /></div>
				<div className='item-description'><Skeleton height={300} /></div>
			</div>
			<div className='show-item-content'>
					<div className='sold-quantity'><Skeleton /></div>
					<div className='title'><Skeleton /></div>
					<div className='mount'><Skeleton /></div>
			</div>
		</div>
	)
}

export default SkeletonShowItem