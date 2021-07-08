import React from 'react';
import {  NavLink } from "react-router-dom";

function MenuHeaderMb(props) {
    return (
        <div className="p-2" style={{width: '100%', background: '#fff', position: 'fixed', zIndex: 99}}>
        <div className="mr-2 text-center cursor" style={{width: '35px', height: '35px', background: '#d2ffdd', float: 'left', borderRadius: '8px'}}>
          <img alt="" src="images/icons/ic_logo.svg" style={{marginTop: '5px'}} />
        </div>
        <p className="font-weight-bold float-left mb-0 cursor" style={{marginTop: '7px', color: '#274466'}}>FSF Entertamain</p>
        <NavLink exact to="/join" onClick={props.onProgress}>
        <div className="cursor bg-bt" style={{width: '80px', height: '35px', float: 'right', borderRadius: '8px', padding: '7.5px'}}>
          <div className="float-left mr-2 text-center" style={{width: '20px', height: '20px', marginTop: '-4.5px'}}>
            <img alt="" src="images/icons/ic_add.svg" width="100%" height="100%" />
          </div>
          <p className="float-left font-weight-bold text-white" style={{marginTop: '-2.2px', fontSize: '95%'}}>Join</p>
          <div style={{clear: 'both'}} />
        </div>
        </NavLink>
        <div className="float-right mr-2" style={{width: '35px', height: '35px', borderRadius: '10px'}}>
          <a href="https://discord.gg/kSRApxegrC">
          <img alt="" src="images/icons/discount.png" width="100%" height="100%" />
          </a>
        </div>
      </div>
    );
}

export default MenuHeaderMb;