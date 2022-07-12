import React from 'react'
import { Outlet } from "react-router-dom";

import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Content from './components/Content'

const Layout = () => {
	return (
		<section className='mel-container'>
			<Header />
			<Breadcrumbs />
			<Content> 
				<Outlet />
			</Content>
		</section>
	)
}

export default Layout