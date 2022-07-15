import { useSearchParams } from 'react-router-dom'
import { useDispatch } from "react-redux";

import CardItem from "../../common/CardItem"
import SkeletonCardItem from "../../common/CardItem/SkeletonCardItem"

import useFetch from "../../../hooks/useFetch"
import { Item } from '../../../interfaces/item'
import categories from '../../../store/actions/categories';
import { useEffect } from 'react';

/**
 * @description renderiza los items segun la busqueda
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @return {*}  {JSX.Element}
 */
const ItemResults = (): JSX.Element => {

  const dispatch = useDispatch()
  const [params] = useSearchParams()

  const query = params.get('search')
  const {data, status} = useFetch(`/items?q=${query}&limit=4`)

  useEffect(() => {
    if(data.categories) {
      dispatch(categories(data.categories.length > 0 ? data.categories : ['Inicio',query]))
    }
  }, [data.categories])
  
  const skeletonCardItem = []
  for (let index = 0; index < 4; index++) {
    skeletonCardItem.push(<SkeletonCardItem key={index} />)
  }
  
  return (
    <>
      {status !== 'fetched' ? (
        <>
          {skeletonCardItem}
        </>
      ) : (data.items?.length ? data?.items?.map((item: Item,index: number) => (
        <CardItem key={index} item={item}/>
        )) : <span className='mel-msg-info'>Lo sentimos, no se encontraron resultados!</span>)}
    </>
  )
  
}

export default ItemResults