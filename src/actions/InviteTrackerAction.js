import * as Types from './../actions/ActionTypes';
import firebaseDb from "../../src/firebase";
export const getInviteTracker = () => {  
    return (dispatch) => { 
        firebaseDb.child('invites').on("value", function(snapshot)   {
            if (snapshot.val() != null) {         
                dispatch(getInviteTrackerRD(snapshot.val()))            
            }      
        })  
        
           
    }
}
export const getInviteTrackerRD = (lists) => {
    return {
        type: Types.GET_INVITETRACKER,
        payload: lists
    }

}