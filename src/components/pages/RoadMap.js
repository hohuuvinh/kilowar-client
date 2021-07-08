import React from 'react';
import { useEffect } from 'react';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import GecoInfoPc from '../pc/GecoInfoPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';
import BannerMb from '../mb/BannerMb';

function RoadMap({onProgress}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress}/>
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="roadmap"/>
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px' }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold" style={{ fontSize: '130%' }}>RoadMap Kilowar</p>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">End of July 2021</p>
                                    <p className="mb-0">- Complete the smart contract, issue the first token</p>
                                    <p className="mb-0">- Perform game release phase 1</p>
                                    <p className="mb-0">- NFT pairing function ready</p>
                                    <p className="mb-0">- Open sale of all seeds to whitelist participants</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Early August 2021</p>
                                    <p className="mb-0">- Efforts to browse tokens at alcor.exchange</p>
                                    <p className="mb-0">- Do a phase 2 of the game for all fans Kilowar</p>
                                    <p className="mb-0">- Use seed NFT for battle</p>
                                    <p className="mb-0">- Geco token Rewards Released</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">August 2021</p>
                                    <p className="mb-0">- Release the complete version to everyone</p>
                                    <p className="mb-0">- Efforts to bring geco tokens to other exchanges</p>
                                    <p className="mb-0">- Massive media campaign</p>
                                    <p className="mb-0">- Update to adjust in-game features</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">May 2022</p>
                                    <p className="mb-0">- Launch version 2 of the game</p>
                                    <p className="mb-0">- Successfully put Geco token on major exchanges</p>
                                    <p className="mb-0">- All new items on sale for the fans</p>
                                    <p className="mb-0">- Using the Geco fund for the planting and development of plants to protect the environment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GecoInfoPc  onProgress={onProgress}/>
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', background: 'green', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress}/>
                <MenuBottomMb onProgress={onProgress} setActive="roadmap"/>
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <BannerMb/>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold" style={{ fontSize: '130%' }}>RoadMap Kilowar</p>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">End of July 2021</p>
                                    <p className="mb-0">- Complete the smart contract, issue the first token</p>
                                    <p className="mb-0">- Perform game release phase 1</p>
                                    <p className="mb-0">- NFT pairing function ready</p>
                                    <p className="mb-0">- Open sale of all seeds to whitelist participants</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Early August 2021</p>
                                    <p className="mb-0">- Efforts to browse tokens at alcor.exchange</p>
                                    <p className="mb-0">- Do a phase test of the game for all fans Kilowar</p>
                                    <p className="mb-0">- Use seed NFT for battle</p>
                                    <p className="mb-0">- Geco token Rewards Released</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">August 2021</p>
                                    <p className="mb-0">- Release the complete version to everyone</p>
                                    <p className="mb-0">- Efforts to bring geco tokens to other exchanges</p>
                                    <p className="mb-0">- Massive media campaign</p>
                                    <p className="mb-0">- Update to adjust in-game features</p>
                                </div>
                                <div className="mb-3">
                                    <p className="font-weight-bold mb-0">May 2022</p>
                                    <p className="mb-0">- Launch version 2 of the game</p>
                                    <p className="mb-0">- Successfully put Geco token on major exchanges</p>
                                    <p className="mb-0">- All new items on sale for the fans</p>
                                    <p className="mb-0">- Using the Geco fund for the planting and development of plants to protect the environment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoadMap;