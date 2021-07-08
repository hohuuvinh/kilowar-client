import * as Types from './../actions/ActionTypes';
import firebaseDb from "../../src/firebase";
export const getBanners = () => {
    return (dispatch) => {
        firebaseDb.child('banner').on("value", function(snapshot)   {
            if (snapshot.val() != null) {
                dispatch(getBannersRD(snapshot.val()))            
            }
        }) 
    }
}
export const getBannersRD = (banners) => {
    return {
        type: Types.GET_BANNERS,
        payload: banners
    }

}