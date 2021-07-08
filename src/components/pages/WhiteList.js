import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWhiteLists } from './../../actions/WhiteListsAction';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import GecoInfoPc from '../pc/GecoInfoPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';

function WhiteList({ onProgress }) {
    const [whiteLists, setWhiteList] = useState()
    const [value, setValue] = useState("")

    let dispatch = useDispatch();
    const WhiteListsRD = useSelector(state => state.WhiteListsRD);
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getWhiteLists());
    }, []);
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        setValue(value)
        var arr = Object.values(WhiteListsRD).filter((WhiteListsRD) =>
            WhiteListsRD.waxAccount.toLowerCase().includes(value.toLowerCase())
        )
        setWhiteList(arr)
    }
    const abc = () =>{
        return <p>fjfjfjf</p>
    }
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress} />
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="whitelist" />
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px', height: "calc(100vh - 55px)" }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-2 float-left" style={{ fontSize: '130%' }}>White List</p>
                                <div className="op mb-2" style={{ width: '300px', height: '35px', float: 'right', borderRadius: '8px' }}>
                                    <div className="text-center float-left" style={{ width: '35px', height: '35px', borderRadius: '8px' }}>
                                        <img alt="" src="images/icons/ic_search.svg" style={{ marginTop: '9px' }} />
                                    </div>
                                    <input value={value} onChange={handleChange} className="float-right op" type name placeholder="Enter Wax account" style={{ width: 'calc(100% - 35px)', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                </div>
                                <div style={{ clear: 'both' }} />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Wax account{abc}</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            whiteLists == null ?
                                                Object.keys(WhiteListsRD).map((id,i) => {
                                                    return i<9 ? <tr key={id}>
                                                        <td>{WhiteListsRD.[id].waxAccount}</td>
                                                        <td>{WhiteListsRD.[id].datetime}</td>
                                                    </tr>:""
                                                })
                                                :
                                                Object.keys(whiteLists).map((id,i) => {
                                                    return i<9 ? <tr key={id}>
                                                        <td>{whiteLists.[id].waxAccount}</td>
                                                        <td>{whiteLists.[id].datetime}</td>
                                                    </tr>:""
                                                })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <GecoInfoPc onProgress={onProgress} />
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress} />
                <MenuBottomMb onProgress={onProgress} setActive="whitelist" />
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px', height: "calc(100vh - 50px)" }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2 mt-0 mb-5" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-2 float-left" style={{ fontSize: '130%' }}>White List</p>
                                <div className="op mb-2" style={{ width: '100%', height: '35px', float: 'right', borderRadius: '8px' }}>
                                    <div className="text-center float-left" style={{ width: '35px', height: '35px', borderRadius: '8px' }}>
                                        <img alt="" src="images/icons/ic_search.svg" style={{ marginTop: '9px' }} />
                                    </div>
                                    <input value={value} onChange={handleChange} className="float-right op" type name placeholder="Enter Wax account" style={{ width: 'calc(100% - 35px)', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                </div>
                                <div style={{ clear: 'both' }} />
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ fontSize: "100%" }}>Wax account</th>
                                            <th scope="col" style={{ fontSize: "100%" }}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            whiteLists == null ?
                                            Object.keys(WhiteListsRD).map((id,i) => {
                                                return i<7 ? <tr key={id}>
                                                    <td style={{ fontSize: "100%" }}>{WhiteListsRD.[id].waxAccount}</td>
                                                    <td style={{ fontSize: "100%" }}>{WhiteListsRD.[id].datetime}</td>
                                                </tr>:""
                                            })
                                            :
                                            Object.keys(whiteLists).map((id,i) => {
                                                return i<7 ?<tr key={id}>
                                                    <td>{whiteLists.[id].waxAccount}</td>
                                                    <td>{whiteLists.[id].datetime}</td>
                                                </tr>:""
                                            })
                                        }
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