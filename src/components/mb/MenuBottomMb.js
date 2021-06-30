
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import React from 'react'

function MenuBottomMb(props) {

  return (
    <div className="p-2" style={{ width: '100%', background: '#fff', position: 'fixed', bottom: 0, display: 'flex', zIndex: 999 }}>
      
      <div className="mr-2 text-center cursor" style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/">
          <img src="images/icons/ic_home.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className="mr-2 text-center cursor" style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/white-paper">
          <img src="images/icons/ic_paper.svg" width="35%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className="mr-2 text-center cursor" style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/white-list">
          <img src="images/icons/ic_user.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className="mr-2 text-center cursor" style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/road-map">
          <img src="images/icons/ic_road_map.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
      <div className="mr-2 text-center cursor" style={{ width: '20%', height: '45px' }}>
        <NavLink exact to="/play-game">
          <img src="images/icons/ic_note.svg" width="40%" style={{ marginTop: '8px' }} />
        </NavLink>
      </div>
    </div>
  );
}

export default MenuBottomMb;