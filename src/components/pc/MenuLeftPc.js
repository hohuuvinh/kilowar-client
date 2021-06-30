import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function MenuLeftPc(props) {
    return (
        <div className="bg" style={{width: '185px', padding: '10px 0 0px 10px'}}>
              <div style={{width: '175px', height: '500px', position: 'fixed'}}>
                <div className="cursor" style={{width: '100%', background: '#fff', borderRadius: '12px', padding: '16px', display: 'flex', paddingRight: '0 !important'}}>
                  <div className="mr-2" style={{width: '35px', height: '35px'}}>
                    <img src="images/icons/logo1.svg" width="100%" height="100%" style={{borderRadius: '8px'}} />						
                  </div>
                  <div style={{marginTop: '-3px'}}>
                    <p className="font-weight-bold mb-0" style={{color: '#304a6b'}}>Kilo War</p>
                    <p className="mb-0" style={{fontSize: '80%', color: '#304a6b'}}>Blockchain Game</p>
                  </div>
                </div>
                <div className="mt-2" style={{width: '100%', background: '#fff', borderRadius: '12px', paddingTop: '10px', paddingBottom: '10px'}}>
                <NavLink exact to="/">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_home.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>Home</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/nft-card">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_card.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>NFT Card</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/token">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_token.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>Token</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/road-map">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_road_map.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>Road Map</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/white-paper">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_paper.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>White Paper</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/white-list">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_user.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>White List</p>
                    </div>
                  </div>
                  </NavLink>
                  <NavLink exact to="/play-game">
                  <div className="menu-active" style={{width: '100%', height: '60px', borderLeft: '3px solid #fff'}}>
                    <div style={{width: '82%', height: '60px', margin: 'auto', padding: '20px 10px 30px 10px', display: 'flex', borderBottom: '1px solid #f2f3f7'}}>
                      <div className="mr-3" style={{width: '22px', height: '22px'}}>
                        <img src="images/icons/ic_note.svg" width="100%" style={{marginTop: '-8px'}} />
                      </div>
                      <p className="font-weight-bold" style={{fontSize: '90%', color: '#526782'}}>Game</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              </div>
            </div>
    );
}

export default MenuLeftPc;