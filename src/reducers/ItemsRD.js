import * as Types from './../actions/ActionTypes';

var initialState = [];

const ItemsRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ITEMS:   
        
            state = action.payload;
            // console.log(state)
            return state;
        default: return [...state];
    }
}
export default ItemsRD;