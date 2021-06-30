import React from 'react';

function GecoInfoMb(props) {
    return (
        <div className="bg-bt p-2 mt-2" style={{width: '100%', borderRadius: '10px', color: '#fff'}}>
                <div className="mt-3 mb-3" style={{width: '70px', height: '70px', margin: 'auto', background: '#6dd385', borderRadius: '10px'}}>
                  <img src="images/icons/coin.png" width="100%" height="100%" />
                </div>
                <p className="text-center">Geco is a token used mainly in the game, it has the color of sea and plants. The first eco-friendly digital currency will be launched</p>
                <div className="text-center mb-3">
                  <div className="btn " style={{background: '#6dd385', borderRadius: '10px'}}><p className="mb-0">See more</p></div>
                </div>
              </div>
    );
}

export default GecoInfoMb;