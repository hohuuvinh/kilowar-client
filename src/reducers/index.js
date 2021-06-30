import { combineReducers } from 'redux';
import ItemsRD from './ItemsRD';

const appReducers = combineReducers({
  ItemsRD: ItemsRD
})
export default appReducers;