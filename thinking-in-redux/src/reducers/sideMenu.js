import { TOGGLE_SIDE_MENU, ADD_BEER_TO_CART } from '../actions'

/*
reducers should do 3 things:
    1. Set the default state
    2. Handle an action by checking the type and return a new state WITHOUT mutating the state
    3. Return the default state if no action is handled
*/
const sideMenu = (state = {isOpen:false}, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
    	return {...state, isOpen: !state.isOpen}
    case ADD_BEER_TO_CART:
    	return {...state, isOpen: true}
    default:
    	return state;
  }
}

export default sideMenu
