import React from 'react';
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
import { useEffect, useState } from 'react';

function Home(props) {
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
                            <BannerPc />
                            <NewsPc />
                            <ItemNFTPc />
                        </div>
                    </div>
                    <GecoInfoPc />
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', margin: 0 }}>
                <MenuHeaderMb />
                <MenuBottomMb />
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <img src="images/banners/banner.jpg" width="100%" style={{ borderRadius: '10px', maxHeight: '444px' }} />
                        <NewsMb />
                        <ItemNFTMb />
                        <GecoInfoMb />
                        <div className="mt-2" style={{ width: '100%' }}>
                            <img src="images/banners/banner2.jpg" width="100%" style={{ borderRadius: '10px', maxHeight: '444px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;