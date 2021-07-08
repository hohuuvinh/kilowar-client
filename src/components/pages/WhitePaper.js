import React from 'react';
import { useEffect } from 'react';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import GecoInfoPc from '../pc/GecoInfoPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';
import BannerMb from '../mb/BannerMb';


function WhitePaper({ onProgress }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress} />
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="whitepaper" />
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px' }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-0" style={{ fontSize: '130%' }}>White Paper Kilowar</p>
                                <p className="mb-4 font-weight-bold">This whitepaper is a living document. It will be updated regularly. Any information listed here could be altered and values could be updated but overall the core structure will stay the same and any major changes will be announced.</p>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is Kilowar</p>
                                    <p className="mb-0">- Kilowar is a game where you can earn Geco tokens. to mine and get a chance to mine NFT game card
                                        every time you Join the game. This Kilowar is a blockchain based game and requires a small investment for
                                        the purchase of a seed card.</p>
                                        <p className="mb-0">- Kilowar is a competitive combat simulation game that makes geco mining fun,
                                        cooperation between players. This is achieved by encouraging players to compete for Geco.</p>
                                    <p className="mb-0">- During the Game, players can obtain NFTs (digital game items) to supplement Geco mining, participate in
                                        Enter the battles and complete the missions in the game. Depending on their strategy, players can
                                        buy and assemble the NFTs that best suit their playstyle.</p>
                                    <p className="mb-0">- Buy NFT: In-game items are made into NFTs, which help players mine Geco, participate in matches
                                        battle and complete missions in the game.</p>
                                    <p className="mb-0">- Kilowar is a fighting game on the WAX ​​Blockchain platform. Initially to play the game, choose a seed NFT to join the battle, which can be combined with NFT weapons to increase strength.</p>
                                    <p className="mb-0">- Each NFT seed will have different strengths and weaknesses depending on the enemy that we will choose the appropriate NFT to fight. power will be balanced</p>
                                    <p className="mb-0">- The game is divided into different levels, corresponding to 5 levels for fans to conquer</p>
                                    <p className="mb-0">- We can pair seed NFTs to increase the power. The strongest is probably level 3</p>
                                    <p className="mb-0">- The reward is given to the winner of each stage done via smart contract</p>
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>NFT Kilowar</p>
                                    <p className="mb-2">- Some of the first seeds and weapons are released</p>
                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_seeds.jpg?alt=media&token=c6f9f9c2-6788-43c3-bc94-d0372086975a" width="100%"></img>

                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_weapons.jpg?alt=media&token=11a9e11d-5ebb-4b38-8057-a2fac7dc98a8" width="100%"></img>

                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Pack Kilowar</p>
                                    <p className="mt-2 mb-3">- Packages will be open for sale once, <a href="https://discord.gg/kSRApxegrC">Discord</a></p>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">SEEDS - Wood Pack</p>
                                                    <p className="mb-1">- Wood Seeds pack $30 - 5 NFTs<br />
                                                        - 800 Total Supply<br />
                                                        - This is a package containing 5 NFT seeds needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 4 level 1 seeds and random for(70% - Level 1, 30% - Level 2)</p>
                                                </td>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">SEEDS - Silver Pack</p>
                                                    <p className="mb-1">- Silver Seeds pack $55 - 10 NFTs<br />
                                                        - 300 Total Supply<br />
                                                        - This is a package containing 10 NFT seeds needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 8 level 1 seeds and random for(60% - Level 1, 25% - Level 2, 15% - level 3)</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">WEAPONS - Wood Pack</p>
                                                    <p className="mb-1">- Wood Weapons pack $29 - 5 NFTs<br />
                                                        - 1800 Total Supply<br />
                                                        - This is a package containing 5 NFT weapons needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 4 level 1 weapons and random for(70% - Level 1, 30% - Level 2)</p>
                                                </td>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">WEAPONS - Silver Pack</p>
                                                    <p className="mb-1">- Silver Weapons pack $39 - 10 NFTs<br />
                                                        - 1300 Total Supply<br />
                                                        - This is a package containing 10 NFT weapons needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 8 level 1 weapons and random for(60% - Level 1, 25% - Level 2, 15% - level 3)</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_packs.jpg?alt=media&token=f83eaf1a-a320-470c-a098-b59500c019f8" width="100%"></img>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is the GECO token?</p>
                                    <p className="mb-0">- Geco is a kilowar native utility token and has the following use cases:</p>
                                    <p className="mb-0">- In-Game Currency: Geco Token is the currency in the kilowar World, where players request Geco to
                                        purchase and upgrade items, participate in quests and battles, and other game-related activities.
                                        Incentivize Gaming: Active users can earn Geco as a reward for participating for development
                                        ecosystem and activities in the game.</p>

                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>How can I join the battle?</p>
                                    <p className="mb-0">- You need minimum 1 seed NFT card to enter the game, NFT seeds will be sold at Atomichub</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is the limit of the NFTs, Is it infinite?</p>
                                    <p className="mb-0">- NFT packages are only released once to avoid inflation in the game. We only release one-time purchase until version 2, <a href>see here</a></p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Who can buy NFT packs from the game?</p>
                                    <p className="mb-0">- Only those who are on the white list, are an original fan of us. Register now to be one of the members who owns this rare package</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Collection Market fee</p>
                                    <p className="mb-0">- The planned collection fee for the Kilowar collection only 1%</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Multi-accounting</p>
                                    <p className="mb-0">- We think it won't do you any good. You can use multiple accounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GecoInfoPc onProgress={onProgress} />
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', background: 'green', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress} />
                <MenuBottomMb onProgress={onProgress} setActive="whitepaper" />
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <BannerMb />
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-0" style={{ fontSize: '130%' }}>White Paper Kilowar</p>
                                <p className="mb-4 font-weight-bold">This whitepaper is a living document. It will be updated regularly. Any information listed here could be altered and values could be updated but overall the core structure will stay the same and any major changes will be announced.</p>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is Kilowar</p>
                                    <p className="mb-0">- Kilowar is a game where you can earn Geco tokens. to mine and get a chance to mine NFT game card
                                        every time you Join the game. This Kilowar is a blockchain based game and requires a small investment for
                                        the purchase of a seed card.</p>
                                        <p className="mb-0">- Kilowar is a competitive combat simulation game that makes geco mining fun,
                                        cooperation between players. This is achieved by encouraging players to compete for Geco.</p>
                                    <p className="mb-0">- During the Game, players can obtain NFTs (digital game items) to supplement Geco mining, participate in
                                        Enter the battles and complete the missions in the game. Depending on their strategy, players can
                                        buy and assemble the NFTs that best suit their playstyle.</p>
                                    <p className="mb-0">- Buy NFT: In-game items are made into NFTs, which help players mine Geco, participate in matches
                                        battle and complete missions in the game.</p>
                                    <p className="mb-0">- Kilowar is a fighting game on the WAX ​​Blockchain platform. Initially to play the game, choose a seed NFT to join the battle, which can be combined with NFT weapons to increase strength.</p>
                                    <p className="mb-0">- Each NFT seed will have different strengths and weaknesses depending on the enemy that we will choose the appropriate NFT to fight. power will be balanced</p>
                                    <p className="mb-0">- The game is divided into different levels, corresponding to 5 levels for fans to conquer</p>
                                    <p className="mb-0">- We can pair seed NFTs to increase the power. The strongest is probably level 3</p>
                                    <p className="mb-0">- The reward is given to the winner of each stage done via smart contract</p>
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>NFT Kilowar</p>
                                    <p className="mb-2">- Some of the first seeds and weapons are released</p>
                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_seeds.jpg?alt=media&token=c6f9f9c2-6788-43c3-bc94-d0372086975a" width="100%"></img>

                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_weapons.jpg?alt=media&token=11a9e11d-5ebb-4b38-8057-a2fac7dc98a8" width="100%"></img>

                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Pack Kilowar</p>
                                    <p className="mt-2 mb-3">- Packages will be open for sale once, <a href="https://discord.gg/kSRApxegrC">Discord</a></p>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">SEEDS - Wood Pack</p>
                                                    <p className="mb-1">- Wood Seeds pack $30 - 5 NFTs<br />
                                                        - 800 Total Supply<br />
                                                        - This is a package containing 5 NFT seeds needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 4 level 1 seeds and random for(70% - Level 1, 30% - Level 2)</p>
                                                </td>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">SEEDS - Silver Pack</p>
                                                    <p className="mb-1">- Silver Seeds pack $55 - 10 NFTs<br />
                                                        - 300 Total Supply<br />
                                                        - This is a package containing 10 NFT seeds needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 8 level 1 seeds and random for(60% - Level 1, 25% - Level 2, 15% - level 3)</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">WEAPONS - Wood Pack</p>
                                                    <p className="mb-1">- Wood Weapons pack $29 - 5 NFTs<br />
                                                        - 1800 Total Supply<br />
                                                        - This is a package containing 5 NFT weapons needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 4 level 1 weapons and random for(70% - Level 1, 30% - Level 2)</p>
                                                </td>
                                                <td style={{ width: "50%" }}>
                                                    <p className="font-weight-bold mb-1">WEAPONS - Silver Pack</p>
                                                    <p className="mb-1">- Silver Weapons pack $39 - 10 NFTs<br />
                                                        - 1300 Total Supply<br />
                                                        - This is a package containing 10 NFT weapons needed to play the game Kilowar on the WAX ​​Blockchain.<br />
                                                        - This pack includes 8 level 1 weapons and random for(60% - Level 1, 25% - Level 2, 15% - level 3)</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/kilowar-server.appspot.com/o/images%2Ftotal_packs.jpg?alt=media&token=f83eaf1a-a320-470c-a098-b59500c019f8" width="100%"></img>
                                    
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is the GECO token?</p>
                                    <p className="mb-0">- Geco is a kilowar native utility token and has the following use cases:</p>
                                    <p className="mb-0">- In-Game Currency: Geco Token is the currency in the kilowar World, where players request Geco to
                                        purchase and upgrade items, participate in quests and battles, and other game-related activities.
                                        Incentivize Gaming: Active users can earn Geco as a reward for participating for development
                                        ecosystem and activities in the game.</p>

                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>How can I join the battle?</p>
                                    <p className="mb-0">- You need minimum 1 seed NFT card to enter the game, NFT seeds will be sold at Atomichub</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>What is the limit of the NFTs, Is it infinite?</p>
                                    <p className="mb-0">- NFT packages are only released once to avoid inflation in the game. We only release one-time purchase until version 2, <a href>see here</a></p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Who can buy NFT packs from the game?</p>
                                    <p className="mb-0">- Only those who are on the white list, are an original fan of us. Register now to be one of the members who owns this rare package</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Collection Market fee</p>
                                    <p className="mb-0">- The planned collection fee for the Kilowar collection only 1%</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-1 text-center mt-3" style={{fontSize:"130%"}}>Multi-accounting</p>
                                    <p className="mb-0">- We think it won't do you any good. You can use multiple accounts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhitePaper;