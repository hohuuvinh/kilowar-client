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
import BannerMb from '../mb/BannerMb';
import { useEffect } from 'react';

function Home({onProgress}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div  id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress}/>
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="home" />
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px' }}>
                        <div style={{ width: '100%' }}>
                            <BannerPc />
                            <NewsPc onProgress={onProgress}/>
                            <ItemNFTPc />
                        </div>
                    </div>
                    <GecoInfoPc onProgress={onProgress}/>
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress}/>
                <MenuBottomMb onProgress={onProgress} setActive="home"/>
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                    <BannerMb/>
                        <NewsMb onProgress={onProgress}/>
                        <ItemNFTMb />
                        <GecoInfoMb onProgress={onProgress}/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;