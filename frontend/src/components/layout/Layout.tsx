import React from 'react'

import './scss/styles.scss';

import { Outlet } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Content from './components/Content'

/**
 * @description renderiza el layout principal
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*}  {JSX.Element}
 */
const Layout = (): JSX.Element => {
	return (
		<section className='mel-container'>
			<Header />
			<Breadcrumbs />
			<Content> 
				<Outlet />
			</Content>
			<Toaster 
				position="bottom-left"
			/>
		</section>
	)
}

export default Layout