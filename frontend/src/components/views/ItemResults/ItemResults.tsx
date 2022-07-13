import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

import { Item } from "../../../interfaces/item"
import CardItem from "../../common/CardItem/CardItem"

import useFetch from "../../../hooks/useFetch"

interface AppState {
  items: Item[] | []    
  loading: boolean    
}

/**
 * @description renderiza los items segun la busqueda
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*}  {JSX.Element}
 */
const ItemResults = (): JSX.Element => {

  const [items, setItems] = useState<AppState['items']>([])

  const [params] = useSearchParams()

  const query = params.get('search')
  const {data, status} = useFetch(`/items?q=${query}`)

  useEffect(() => {
    setItems(data)
  }, [data])

    return (
      <>
        {status !== 'fetched' ? (
          <>
            <Skeleton width={100} height={180}/>
            <Skeleton width={100} count={4}/>
          </>
        ) : (items.length > 0 ? items?.map(item => (
          <CardItem key={item.id} item={item}/>
          )) : <span className='mel-msg-info'>Lo sentimos, no se encontraron resultados!</span>)}
      </>
    )
  
}

export default ItemResults