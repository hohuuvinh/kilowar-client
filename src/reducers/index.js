import { combineReducers } from 'redux';
import BannersRD from './BannersRD';
import ItemsRD from './ItemsRD';
import WhiteListsRD from './WhiteListsRD';

const appReducers = combineReducers({
  ItemsRD: ItemsRD,
  WhiteListsRD:WhiteListsRD,
  BannersRD:BannersRD
})
export default appReducers;