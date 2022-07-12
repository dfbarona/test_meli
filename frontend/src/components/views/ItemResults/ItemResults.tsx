import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Item } from "../../../interfaces/item"
import CardItem from "../../common/CardItem"

import useFetch from "../../../hooks/useFetch"

interface AppState {
  items: Item[] | []    
}

const ItemResults = () => {

  const [items, setItems] = useState<AppState['items']>([])
  const [params] = useSearchParams()

  const query = params.get('search')
  const {data} = useFetch(`/items?q=${query}`)

  useEffect(() => {
    setItems(data)
  }, [data])

	return (
		<>
      {items.length > 0 ? items?.map(item => (
        <CardItem key={item.id} item={item}/>
        )) : <span className='mel-msg-info'>Lo sentimos, no se encontraron resultados!</span>}
    </>
	)
}

export default ItemResults