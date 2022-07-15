import React, { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

/**
 * @description renderiza el contenedor principal del sitio
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @param {Props} {children}
 * @return {*}
 */
const Content = ({ children }: Props) => {
	return <main className="mel-main-content">{children}</main>;
};

export default Content;
