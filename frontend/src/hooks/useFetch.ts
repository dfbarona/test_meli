import axios from "axios"
import { Console } from "console"
import { useState, useEffect } from "react"

import * as config from "../config/enviroments"

type Methods = 'GET' 
type StatusFetch = 'idle'| 'fetching' | 'fetched'

/**
 * @description
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @param {string} path
 * @param {Methods} method
 * @param {KeyVal} [body]
 * @return {*}  {UseFetchReturn}
 */
const useFetch = ( path: string, method: Methods = 'GET', body = {}) => {
	const [status, setStatus] = useState<StatusFetch>( 'idle' )
	const [data, setData] = useState([])

	useEffect(() => {
		if ( !path ) return

		const fetchData = async (): Promise<void> => {
			setStatus( 'fetching' )

      await axios.get(config.API_URL + path, body)
			const response = await axios({
        method: method,
        url: config.API_URL + path,
        params: body
      })

			if ( response.status && response.data ) {
				setData( response.data )
				setStatus( 'fetched' )
			} else {
				console.log("error de conexion")
			}
		}

		fetchData()
	}, [path])

	return { status, data }
}

export default useFetch
