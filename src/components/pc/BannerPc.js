import React from 'react';

function BannerPc(props) {
    return (
        <div style={{display: 'flex'}}>
                  <div style={{width: '73.3%', paddingRight: '10px'}}>
                    <img src="images/banners/banner.jpg" width="100%" style={{borderRadius: '10px', maxHeight: '444px'}} />
                  </div>
                  <div style={{width: '26.7%'}}>
                    <img src="images/banners/banner2.jpg" width="100%" style={{borderRadius: '10px', maxHeight: '444px'}} />
                  </div>
                </div>
    );
}

export default BannerPc;