import React from 'react';
import { useEffect, useState } from 'react';
import ItemNFTMb from '../mb/ItemNFTMb';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';

import GecoInfoPc from '../pc/GecoInfoPc';
import ItemNFTPc from '../pc/ItemNFTPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';


function Token(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc />
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc />
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px' }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold" style={{ fontSize: '130%' }}>What is Kilowar (Geco Token)</p>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">What Is Kilowar?</p>
                                    <p className="mb-0">- Kilowar is a game where you can earn Geco for mining and have a chance to get NFT game card after each battle. </p>
                                    <p className="mb-0">- This Kilowar is a blockchain based game. With simple gameplay, players will receive Geco a blockchain token. Geco can be used to
                                        trading assets in the game</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Geco Launchpool Details:</p>
                                    <p className="mb-0">- Token Name: Geco </p>
                                    <p className="mb-0">- Maximum token supply: 3,700,000,000 Geco</p>
                                    <p className="mb-0">- Initial Circulating Supply: 0 Geco
                                    </p>
                                    <p className="mb-0">- Staking Terms: No upper limit. No KYC required</p>
                                    <p className="mb-0">- Maximum token supply: 4,000,000,000 Geco</p>
                                </div>
                                <p className="text-center font-weight-bold">Expected to officially release in mid-August</p>
                            </div>
                        </div>
                    </div>
                    <GecoInfoPc />
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', background: 'green', margin: 0 }}>
                <MenuHeaderMb />
                <MenuBottomMb />
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <img src="images/banners/banner.jpg" width="100%" style={{ borderRadius: '10px', maxHeight: '444px' }} />
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold" style={{ fontSize: '130%' }}>What is Kilowar (Geco Token)</p>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">What Is Kilowar?</p>
                                    <p className="mb-0">- Kilowar is a game where you can earn Geco for mining and have a chance to get NFT game card after each battle. </p>
                                    <p className="mb-0">- This Kilowar is a blockchain based game. With simple gameplay, players will receive Geco a blockchain token. Geco can be used to
                                        trading assets in the game</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Geco Launchpool Details:</p>
                                    <p className="mb-0">- Token Name: Geco </p>
                                    <p className="mb-0">- Maximum token supply: 3,700,000,000 Geco</p>
                                    <p className="mb-0">- Initial Circulating Supply: 40,473,079 Geco
                                    </p>
                                    <p className="mb-0">- Staking Terms: No upper limit. No KYC required</p>
                                    <p className="mb-0">- Maximum token supply: 4,000,000,000 Geco</p>
                                </div>
                                <p className="text-center font-weight-bold">Expected to officially release in mid-August</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Token;