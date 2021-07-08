import React from 'react';
import { NavLink } from "react-router-dom";

function NewsMb(props) {
  return (
    <div className="bg-white  mt-2 pt-1" style={{ borderRadius: '10px' }}>
      <p className="font-weight-bold mb-0 ml-2" style={{ color: '#304a6b' }}>Status</p>

      <div className="row m-0 bg-white">

        <div className="col-md-12 col-lg-6 p-2 cursor">
        <NavLink exact to="/token" onClick={props.onProgress}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '70px', height: '70px' }}>
              <img alt="" src="images/icons/coin.png" width="100%" height="100%" />
            </div>
            <div className="pl-2 pt-1" style={{ width: 'calc(100% - 70px)' }}>
              <p className="font-weight-bold mb-1" style={{ fontSize: '110%' }}>Assets on Kilowar</p>
              <p>A digital currency is about to be deployed on smart contracts. Geco tokens are the currency in Kilo war, where players...</p>
            </div>
          </div>
          </NavLink>
        </div>
        <div className="col-md-12 col-lg-6 p-2 cursor">
        <NavLink exact to="/white-paper" onClick={props.onProgress}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '70px', height: '70px' }}>
              <img alt="" src="images/icons/ic_wax.ico" width="100%" height="100%" />
            </div>
            <div className="pl-2 pt-1" style={{ width: 'calc(100% - 70px)' }}>
              <p className="font-weight-bold mb-1" style={{ fontSize: '110%' }}>Wax ecosystem with the project</p>
              <p>The WAX ​​blockchain is the brainchild of the Worldwide Asset eXchange, and is dedicated to the creation, selling, with...</p>
            </div>
          </div>
          </NavLink>
        </div>
        <div className="col-md-12 col-lg-6 p-2 cursor">
        <NavLink exact to="/white-paper" onClick={props.onProgress}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '70px', height: '70px' }}>
              <img alt="" src="images/icons/ic_blockchain.svg" width="100%" height="100%" />
            </div>
            <div className="pl-2 pt-1" style={{ width: 'calc(100% - 70px)' }}>
              <p className="font-weight-bold mb-1" style={{ fontSize: '110%' }}>blockchain in game</p>
              <p>Blockchain gaming is gaming that utilizes true item ownership from the same technology that lies at the core of...</p>
            </div>
          </div>
          </NavLink>
        </div>
        <div className="col-md-12 col-lg-6 p-2 cursor">
        <NavLink exact to="/white-paper" onClick={props.onProgress}>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '70px', height: '70px' }}>
              <img alt="" className="mt-2" src="images/icons/logo.png" width="100%" />
            </div>
            <div className="pl-2 pt-1" style={{ width: 'calc(100% - 70px)' }}>
              <p className="font-weight-bold mb-1" style={{ fontSize: '110%' }}>Launch the campaign Kilowar</p>
              <p>Started the first round of funding for a blockchain game project that received a lot of good feedback from fans...</p>
            </div>
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NewsMb;