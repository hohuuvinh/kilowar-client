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

function WhiteList(props) {
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
                                <p className="font-weight-bold mb-2 float-left" style={{ fontSize: '130%' }}>White List</p>
                                <div className="op mb-2" style={{ width: '300px', height: '35px', float: 'right', borderRadius: '8px' }}>
                                    <div className="text-center float-left" style={{ width: '35px', height: '35px', borderRadius: '8px' }}>
                                        <img src="images/icons/ic_search.svg" style={{ marginTop: '9px' }} />
                                    </div>
                                    <input className="float-right op" type name placeholder="Enter Wax account" style={{ width: 'calc(100% - 35px)', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                </div>
                                <div style={{ clear: 'both' }} />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Wax account</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
                        <div style={{ width: '100%' }}>
                            <div className="p-2 mt-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-2 float-left" style={{ fontSize: '130%' }}>White List</p>
                                <div className="op mb-2" style={{ width: '100%', height: '35px', float: 'right', borderRadius: '8px' }}>
                                    <div className="text-center float-left" style={{ width: '35px', height: '35px', borderRadius: '8px' }}>
                                        <img src="images/icons/ic_search.svg" style={{ marginTop: '9px' }} />
                                    </div>
                                    <input className="float-right op" type name placeholder="Enter Wax account" style={{ width: 'calc(100% - 35px)', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                </div>
                                <div style={{ clear: 'both' }} />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Wax account</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>kcgbm.wam</td>
                                            <td>2012-05-23 03:30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhiteList;