import * as Types from '../actions/ActionTypes';

var initialState = [];

const WhiteListsRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_WHITELISTS:   
            state = action.payload;
            return state;
        default: return state;
    }
}
export default WhiteListsRD;