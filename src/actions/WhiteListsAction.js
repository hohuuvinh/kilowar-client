import * as Types from './../actions/ActionTypes';
import firebaseDb from "../../src/firebase";
export const getWhiteLists = () => {  
    return (dispatch) => { 
        firebaseDb.child('waxacount').on("value", function(snapshot)   {
            if (snapshot.val() != null) {         
                dispatch(getWhiteListsRD(snapshot.val()))            
            }      
        })  
        
           
    }
}
export const getWhiteListsRD = (whitelists) => {
    return {
        type: Types.GET_WHITELISTS,
        payload: whitelists
    }

}