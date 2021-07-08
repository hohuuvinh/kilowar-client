import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from './../../actions/BannersAction';

function BannerPc() {
  let dispatch = useDispatch();
  const bannersRD = useSelector(state => state.BannersRD);
  useEffect(() => {
    dispatch(getBanners());
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '73.3%', paddingRight: '10px' }}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {      
              Object.keys(bannersRD).map(function(id, index) {
                return <div key={index} className= {index===1?"carousel-item active":"carousel-item"} >
                 <img className="d-block w-100" src={bannersRD[id].image} alt="First slide" style={{borderRadius:"10px"}}/>
               </div>
              })
            }
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div style={{ width: '26.7%' }}>
        <img alt="" src="images/banners/banner2.jpg" width="100%" style={{ borderRadius: '10px', maxHeight: '444px' }} />
      </div>
    </div>
  );
}

export default BannerPc;