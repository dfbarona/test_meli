import {Price} from './price'

export interface Item {
  id: string,
  title: string,
  price: Price,
  picture: string
  condition: string
  free_shipping: boolean
  state_name: string
  sold_quantity?: number
  description?: string
}
