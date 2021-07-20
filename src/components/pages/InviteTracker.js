import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInviteTracker } from './../../actions/InviteTrackerAction';
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import GecoInfoPc from '../pc/GecoInfoPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';

function InviteTracker({ onProgress }) {
    const [inviteTrackerLists, setInviteTrackerLists] = useState()
    const [value, setValue] = useState("")

    let dispatch = useDispatch();
    const InviteTrackerRD = useSelector(state => state.InviteTrackerRD);
    console.log(InviteTrackerRD)
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getInviteTracker());
    }, []);
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        setValue(value)
        var arr = Object.values(InviteTrackerRD).filter((InviteTrackerRD) =>
            InviteTrackerRD.discord.toLowerCase().includes(value.toLowerCase())
        )
        setInviteTrackerLists(arr)
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
                                <p className="font-weight-bold mb-0 float-left" style={{ fontSize: '130%' }}>Invite Tracker</p>

                                <div className="op" style={{ width: '300px', height: '35px', float: 'right', borderRadius: '8px' }}>
                                    <div className="text-center float-left" style={{ width: '35px', height: '35px', borderRadius: '8px' }}>
                                        <img alt="" src="images/icons/ic_search.svg" style={{ marginTop: '9px' }} />
                                    </div>
                                    <input value={value} onChange={handleChange} className="float-right op" type name placeholder="Enter Wax account" style={{ width: 'calc(100% - 35px)', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                </div>

                                <div style={{ clear: 'both' }} />
                                <p style={{fontSize:"90%"}}>(Updated on Tuesday at 12pm UTC)</p>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Discord</th>
                                            <th scope="col">Invites</th>
                                            <th scope="col">Wax Account</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            inviteTrackerLists == null ?
                                                Object.keys(InviteTrackerRD).map((id,i) => {
                                                    return  <tr key={id}>
                                                        <td>{InviteTrackerRD.[id].discord}</td>
                                                        <td>{InviteTrackerRD.[id].invites}</td>
                                                        <td>{InviteTrackerRD.[id].waxaccount}</td>
                                                    </tr>
                                                })
                                                :
                                                Object.keys(inviteTrackerLists).map((id,i) => {
                                                    return <tr key={id}>
                                                        <td>{inviteTrackerLists.[id].discord}</td>
                                                        <td>{inviteTrackerLists.[id].invites}</td>
                                                        <td>{inviteTrackerLists.[id].waxaccount}</td>
                                                    </tr>
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
                                <p className="font-weight-bold float-left mb-1" style={{ fontSize: '130%' }}>White List</p>
                                <p className="mt-2 mb-0" style={{fontSize:"85%",float:"right"}}>(Updated on Tuesday at 12pm UTC)</p>
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
                                          
                                            <th scope="col">Discord</th>
                                            <th scope="col">Invites</th>
                                            <th scope="col">Wax</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            inviteTrackerLists == null ?
                                            Object.keys(InviteTrackerRD).map((id,i) => {
                                                return <tr key={id}>
                                                    <td>{InviteTrackerRD.[id].discord}</td>
                                                    <td>{InviteTrackerRD.[id].invites}</td>
                                                    <td>{InviteTrackerRD.[id].waxaccount}</td>
                                                </tr>
                                            })
                                            :
                                            Object.keys(inviteTrackerLists).map((id,i) => {
                                                return <tr key={id}>
                                                    <td>{inviteTrackerLists.[id].discord}</td>
                                                    <td>{inviteTrackerLists.[id].invites}</td>
                                                    <td>{inviteTrackerLists.[id].waxaccount}</td>
                                                </tr>
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

export default InviteTracker;