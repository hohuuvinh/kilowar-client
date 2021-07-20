import * as Types from '../actions/ActionTypes';

var initialState = [];

const InviteTrackerRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_INVITETRACKER:   
            state = action.payload;
            return state;
        default: return state;
    }
}
export default InviteTrackerRD;