import React from 'react';
import { NavLink } from "react-router-dom";

function GecoInfoMb(props) {
    return (
        <div className="bg-bt p-2 mt-2" style={{width: '100%', borderRadius: '10px', color: '#fff'}}>
                <div className="mt-3 mb-3" style={{width: '70px', height: '70px', margin: 'auto', background: '#6dd385', borderRadius: '10px'}}>
                  <img alt="" src="images/icons/coin.png" width="100%" height="100%" />
                </div>
                <p className="text-center">Geco is a token used mainly in the game, it has the color of sea and plants. The first eco-friendly digital currency will be launched</p>
                <div className="text-center mb-3">
                <NavLink exact to="/token" onClick={props.onProgress}>
                  <div className="btn text-white" style={{background: '#6dd385', borderRadius: '10px'}}><p className="mb-0">See more</p></div>
                  </NavLink>
                </div>
              </div>
    );
}

export default GecoInfoMb;