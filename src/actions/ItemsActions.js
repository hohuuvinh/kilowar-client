import * as Types from './../actions/ActionTypes';
import firebaseDb from "../../src/firebase";
export const getItems = () => {  
    return (dispatch) => { 
        firebaseDb.child('item').on("value", function(snapshot)   {
            if (snapshot.val() != null) {
                dispatch(getItemsRD(snapshot.val()))            
            }
        })          
    }
}
export const getItemsRD = (items) => {
    return {
        type: Types.GET_ITEMS,
        payload: items
    }

}