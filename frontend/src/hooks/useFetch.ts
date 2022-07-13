import axios from "axios"
import { useState, useEffect } from "react"

import * as config from "../config/enviroments"
import { Item } from "../interfaces/item"
import { openNotification } from "../utils"

type Methods = 'GET' 
type StatusFetch = 'idle'| 'fetching' | 'fetched'

type UseFetchReturn = {
	status: StatusFetch;
	data: Item[];
}

/**
 * @description Hook para controlar peticiones de carga iniciales
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @param {string} path
 * @param {Methods} [method='GET']
 * @param {*} [body={}]
 * @return {*}  {UseFetchReturn}
 */
const useFetch = ( path: string, method: Methods = 'GET', body = {}): UseFetchReturn => {
	const [status, setStatus] = useState<UseFetchReturn['status']>( 'idle' )
	const [data, setData] = useState<UseFetchReturn['data']>([])

	useEffect(() => {
		if ( !path ) return

		const fetchData = async (): Promise<void> => {
			setStatus( 'fetching' )

			try {
				await axios.get(config.API_URL + path, body)
				const response = await axios({
					method: method,
					url: config.API_URL + path,
					params: body
				})

				if ( response.status === 200 && response.data ) {
					setData( response.data )
					setStatus( 'fetched' )
				} 
			} catch (error) {
				setStatus( 'fetched' )
				setData( [] )
				openNotification('error', "Se ha presentado un error")
			}
      
		}

		fetchData()
	}, [path])

	return { status, data }
}

export default useFetch
