import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from './../../actions/ItemsActions';

function ItemNFTPc() {
  let dispatch = useDispatch();
  const itemsRD = useSelector(state => state.ItemsRD);
  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div style={{ width: '100%', background: '#fff', padding: '12px', borderRadius: '10px' }}>
      <p className="font-weight-bold mb-1" style={{ color: '#304a6b' }}>NFT Library</p>
      <div className="row m-0">
        {
          Object.keys(itemsRD).map(function (id, index) {
            return <div key={index} className="col-sm-6 col-md-6 col-lg-3 p-0 cursor">
              <img alt="" src={itemsRD[id].image} style={{ width: "100%" }} alt={itemsRD[id].title} />
            </div>
          })
        }
      </div>
    </div>
  );
}

export default ItemNFTPc;