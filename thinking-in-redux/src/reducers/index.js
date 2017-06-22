import { combineReducers } from 'redux'

import beers from './beers'
import cart from './cart'
import sideMenu from './sideMenu'

const reducers = combineReducers({
  beers,
  cart,
  sideMenu
})

export default reducers
