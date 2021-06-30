import React from 'react';
import { useEffect, useState } from 'react';
import GecoInfoMb from '../mb/GecoInfoMb';
import ItemNFTMb from '../mb/ItemNFTMb';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import BannerPc from '../pc/BannerPc';
import GecoInfoPc from '../pc/GecoInfoPc';
import ItemNFTPc from '../pc/ItemNFTPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';
import NewsPc from '../pc/NewsPc';
import NewsMb from '../mb/NewsMb';

function WhitePaper(props) {
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
                        <div className="p-2" style={{width: '100%', borderRadius: '10px', background: '#fff'}}>
        <p className="font-weight-bold mb-0" style={{fontSize: '130%'}}>White Paper Kilowar</p>
        <p className="mb-4 font-weight-bold">This whitepaper is a living document. It will be updated regularly. Any information listed here could be altered and values could be updated but overall the core structure will stay the same and any major changes will be announced.</p>
        <div className="mb-4">
          <p className="font-weight-bold mb-0">What is Kilowar</p>
          <p className="mb-0">- Kilowar is a fighting game on the WAX ​​Blockchain platform. Initially to play the game, choose a seed NFT to join the battle, which can be combined with NFT weapons to increase strength.</p>
          <p className="mb-0">- Each NFT seed will have different strengths and weaknesses depending on the enemy that we will choose the appropriate NFT to fight. power will be balanced</p>
          <p className="mb-0">- The game is divided into different levels, corresponding to 5 levels for fans to conquer</p>
          <p className="mb-0">- We can pair seed NFTs to increase the power. The strongest is probably level 3</p>	
          <p className="mb-0">- The reward is given to the winner of each stage done via smart contract</p>
        </div>
        <div className="mb-4">
          <p className="font-weight-bold mb-0">How can I join the battle?</p>
          <p className="mb-0">- You need minimum 1 seed NFT card to enter the game, NFT seeds will be sold at Atomichub</p>	
        </div>	
        <div className="mb-4">
          <p className="font-weight-bold mb-0">What is the limit of the NFTs, Is it infinite?</p>
          <p className="mb-0">- NFT packages are released only once to avoid inflation in the game. We only release one-time purchase on August 15, 2021 for 1 hour until version 2, <a href>see here</a></p>
        </div>	
        <div className="mb-4">
          <p className="font-weight-bold mb-0">Who can buy NFT packs from the game?</p>
          <p className="mb-0">- Only those who are on the white list, are an original fan of us. Register now to be one of the members who owns this rare package</p>
        </div>	
        <div className="mb-4">
          <p className="font-weight-bold mb-0">Collection Market fee</p>
          <p className="mb-0">- The planned collection fee for the Kilowar collection only 1%</p>
        </div>
        <div className="mb-4">
          <p className="font-weight-bold mb-0">Multi-accounting</p>
          <p className="mb-0">- We think it won't do you any good. You can use multiple accounts</p>
        </div>
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
                                <p className="font-weight-bold mb-0" style={{ fontSize: '130%' }}>White Paper Kilowar</p>
                                <p className="mb-4 font-weight-bold">This whitepaper is a living document. It will be updated regularly. Any information listed here could be altered and values could be updated but overall the core structure will stay the same and any major changes will be announced.</p>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">What is Kilowar</p>
                                    <p className="mb-0">- Kilowar is a fighting game on the WAX ​​Blockchain platform. Initially to play the game, choose a seed NFT to join the battle, which can be combined with NFT weapons to increase strength.</p>
                                    <p className="mb-0">- Each NFT seed will have different strengths and weaknesses depending on the enemy that we will choose the appropriate NFT to fight. power will be balanced</p>
                                    <p className="mb-0">- The game is divided into different levels, corresponding to 5 levels for fans to conquer</p>
                                    <p className="mb-0">- We can pair seed NFTs to increase the power. The strongest is probably level 3</p>
                                    <p className="mb-0">- The reward is given to the winner of each stage done via smart contract</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">How can I join the battle?</p>
                                    <p className="mb-0">- You need minimum 1 seed NFT card to enter the game, NFT seeds will be sold at Atomichub</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">What is the limit of the NFTs, Is it infinite?</p>
                                    <p className="mb-0">- NFT packages are released only once to avoid inflation in the game. We only release one-time purchase on August 15, 2021 for 1 hour until version 2, <a href>see here</a></p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">Who can buy NFT packs from the game?</p>
                                    <p className="mb-0">- Only those who are on the white list, are an original fan of us. Register now to be one of the members who owns this rare package</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">Collection Market fee</p>
                                    <p className="mb-0">- The planned collection fee for the Kilowar collection only 1%</p>
                                </div>
                                <div className="mb-4">
                                    <p className="font-weight-bold mb-0">Multi-accounting</p>
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