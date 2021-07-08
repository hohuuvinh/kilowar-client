import * as Types from '../actions/ActionTypes';

var initialState = [];

const BannersRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_BANNERS:   
            state = action.payload;
            return state;
        default: return state;
    }
}
export default BannersRD;