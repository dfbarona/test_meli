import React, { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

const Content = ({children}: Props) => {
	return (
		<main className='mel-main-content'>{children}</main>
	)
}

export default Content