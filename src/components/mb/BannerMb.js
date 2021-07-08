import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from './../../actions/BannersAction';

function BannerMb() {
    let dispatch = useDispatch();
    const bannersRD = useSelector(state => state.BannersRD);
    useEffect(() => {
        dispatch(getBanners());
    }, []);
    return (
        <div style={{ width: '100%' }}>
            <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        Object.keys(bannersRD).map(function (id, index) {
                            return <div key={index} className={index === 1 ? "carousel-item active" : "carousel-item"} >
                                <img alt="" className="d-block w-100" src={bannersRD[id].image} alt="First slide" style={{ borderRadius: "10px" }} />
                            </div>
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
            </div>
        </div>
    );
}

export default BannerMb;