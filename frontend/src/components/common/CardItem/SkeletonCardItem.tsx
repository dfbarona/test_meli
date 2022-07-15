import React from 'react';
import './scss/styles.scss';

import Skeleton from 'react-loading-skeleton';

/**
 * @description renderiza el skeleton de una tarjeta para un item o articulo
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @return {*}  {JSX.Element}
 */
const SkeletonCardItem = (): JSX.Element => {
	return (
		<div className="card-item">
			<div className="card-item-img">
				<Skeleton width={180} height={180} />
			</div>
			<div className="card-item-content" style={{ width: '100%' }}>
				<div className="item-price">
					<span className="amount">
						<Skeleton />
					</span>
				</div>

				<div className="item-title">
					<Skeleton />
				</div>
				<div className="item-title">
					<Skeleton />
				</div>
				<div className="item-title">
					<Skeleton />
				</div>
			</div>
		</div>
	);
};

export default SkeletonCardItem;
