import React from 'react';

function NewsPc(props) {
    return (
        <div className="mt-2 mb-2" style={{width: '100%', background: '#fff', borderRadius: '10px', padding: '12px'}}>
                  <p className="font-weight-bold mb-1 float-left" style={{color: '#304a6b'}}>News</p>
                  <p className="font-weight-bold mb-1 float-right mr-2 cursor" style={{color: '#304a6b'}}>See more</p>
                  <div style={{clear: 'both'}} />
                  <div className="row m-0">
                    <div className="col-md-12 col-lg-6 p-2 cursor">
                      <div style={{width: '100%', display: 'flex'}}>
                        <div style={{width: '120px', height: '120px'}}>
                          <img src="images/icons/coin.png" width="100%" height="100%" />	
                        </div>
                        <div className="pl-2 pt-1" style={{width: 'calc(100% - 150px)'}}>
                          <p className="font-weight-bold mb-1" style={{fontSize: '120%'}}>Assets on Kilowar</p>
                          <p>A digital currency is about to be deployed on smart contracts. Geco tokens are the currency in Kilo war, where players...</p>
                        </div>			
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 p-2 cursor">
                      <div style={{width: '100%', display: 'flex'}}>
                        <div className="p-2" style={{width: '120px', height: '120px'}}>
                          <img src="images/icons/ic_wax.ico" width="100%" height="100%" />	
                        </div>
                        <div className="pl-2 pt-1" style={{width: 'calc(100% - 150px)'}}>
                          <p className="font-weight-bold mb-1" style={{fontSize: '120%'}}>Wax ecosystem with the project</p>
                          <p>The WAX ​​blockchain is the brainchild of the Worldwide Asset eXchange, and is dedicated to the creation, selling, with...</p>
                        </div>			
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 p-2 cursor">
                      <div style={{width: '100%', display: 'flex'}}>
                        <div className="p-3" style={{width: '120px', height: '120px'}}>	
                          <img src="images/icons/ic_blockchain.svg" width="100%" height="100%" />
                        </div>
                        <div className="pl-2 pt-1" style={{width: 'calc(100% - 150px)'}}>
                          <p className="font-weight-bold mb-1" style={{fontSize: '120%'}}> blockchain in game</p>
                          <p>Blockchain gaming is gaming that utilizes true item ownership from the same technology that lies at the core of...</p>
                        </div>			
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6 p-2 cursor">
                      <div style={{width: '100%', display: 'flex'}}>
                        <div style={{width: '120px', height: '120px'}}>
                          <img className="mt-4" src="images/icons/logo.png" width="100%" />	
                        </div>
                        <div className="pl-2 pt-1" style={{width: 'calc(100% - 150px)'}}>
                          <p className="font-weight-bold mb-1" style={{fontSize: '120%'}}>Launch the campaign Kilowar</p>
                          <p>Started the first round of funding for a blockchain game project that received a lot of good feedback from fans...</p>
                        </div>			
                      </div>
                    </div>
                  </div>
                </div>
    );
}

export default NewsPc;