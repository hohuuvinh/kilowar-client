import React from 'react';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';
import { useEffect } from 'react';

function Game({onProgress}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress}/>
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="playgame"/>
                    <div className="bg" style={{ width: 'calc(100% - 185px)', padding: '10px 10px 10px 10px' }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-1" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <div className="pl-2 pr-2" style={{ width: '96%', height: '570px' }}><img alt="" src="images/backgrounds/gameplay.png" width="100%" height="100%" /></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress}/>
                <MenuBottomMb onProgress={onProgress} setActive="playgame"/>
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', minHeight:'100vh' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                    <div style={{ width: '100%' }}>
                            <div className="p-1" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <div className="pl-2 pr-2" style={{ width: '100%' }}>
                                    <img alt="" src="images/backgrounds/gameplay.png" width="100%" height="100%" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;