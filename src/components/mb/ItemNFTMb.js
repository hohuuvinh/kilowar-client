import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from './../../actions/ItemsActions';

function ItemNFTMb() {
  let dispatch = useDispatch();
  const itemsRD = useSelector(state => state.ItemsRD);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div className="mt-2 pt-1" style={{ width: '100%', background: '#fff', borderRadius: '10px' }}>
      <p className="font-weight-bold mb-0 ml-2" style={{ color: '#304a6b' }}>NFT Library</p>

      <div className="row m-0">
        {
          Object.keys(itemsRD).map(id => {
            return <div key={id} className="col-6 col-xs-6 cursor p-0">
              <img alt="" src={itemsRD.[id].image} style={{width:"100%"}} />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default ItemNFTMb;