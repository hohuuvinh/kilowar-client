import { NavLink } from "react-router-dom";
import React from 'react'

function MenuBottomMb(props) {

  return (
    <div className="p-2" style={{ width: '100%', background: '#fff', position: 'fixed', bottom: 0, display: 'flex', zIndex: 999 }}>
      
      <div className={props.setActive==="home"?"mr-2 text-center cursor active-menu-mb":"mr-2 text-center cursor"} style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/" onClick={props.onProgress}>
          <img alt="" src="images/icons/ic_home.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className={props.setActive==="whitepaper"?"mr-2 text-center cursor active-menu-mb":"mr-2 text-center cursor"} style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/white-paper" onClick={props.onProgress}>
          <img alt="" src="images/icons/ic_paper.svg" width="35%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className={props.setActive==="whitelist"?"mr-2 text-center cursor active-menu-mb":"mr-2 text-center cursor"} style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/white-list" onClick={props.onProgress}>
          <img alt="" src="images/icons/ic_user.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className={props.setActive==="roadmap"?"mr-2 text-center cursor active-menu-mb":"mr-2 text-center cursor"} style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/road-map" onClick={props.onProgress}>
          <img alt="" src="images/icons/ic_road_map.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className={props.setActive==="playgame"?"mr-2 text-center cursor active-menu-mb":"mr-2 text-center cursor"} style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/play-game" onClick={props.onProgress}>
          <img alt="" src="images/icons/ic_note.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
    </div>
  );
}

export default MenuBottomMb;