import { combineReducers } from 'redux';
import BannersRD from './BannersRD';
import ItemsRD from './ItemsRD';
import WhiteListsRD from './WhiteListsRD';
import InviteTrackerRD from './InviteTrackerRD';

const appReducers = combineReducers({
  ItemsRD: ItemsRD,
  WhiteListsRD:WhiteListsRD,
  BannersRD:BannersRD,
  InviteTrackerRD:InviteTrackerRD
})
export default appReducers;