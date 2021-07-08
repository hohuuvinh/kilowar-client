import React, { useState, useEffect } from 'react'
import MenuBottomMb from '../mb/MenuBottomMb';
import MenuHeaderMb from '../mb/MenuHeaderMb';
import GecoInfoPc from '../pc/GecoInfoPc';
import MenuHeaderPc from '../pc/MenuHeaderPc';
import MenuLeftPc from '../pc/MenuLeftPc';
import firebaseDb from "../../firebase";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function JoinWhiteList({ onProgress }) {
    const [success, setSuccess] = useState(true)
    const [values, setValues] = useState({ waxAccount: "" })
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        setValues({
            waxAccount: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        firebaseDb.child('waxacount').push({
            waxAccount: values.waxAccount,
            datetime: new Date().toLocaleString()
        })
        setValues({ waxAccount: "" })
        setSuccess(false)
    }
    return (
        <div>
            <div id="pc_box" style={{ display: 'flex' }}>
                <MenuHeaderPc onProgress={onProgress} />
                <div style={{ width: '100%', marginTop: '55px', display: 'flex' }}>
                    <MenuLeftPc onProgress={onProgress} setActive="" />
                    <div className="bg" style={{ width: 'calc(100% - 385px)', padding: '10px 10px 10px 10px', height: "calc(100vh - 55px)" }}>
                        <div style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold" style={{ fontSize: '130%' }}>Join White List</p>
                                {success ? <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Whitelisted here, you may have a chance to purchase a bundle of NFTs in the upcoming release. Quantities are limited, Hurry up to become a member of us</p>
                                    <form onSubmit={submitForm}>
                                        <div style={{ display: 'flex' }}>
                                            <div className="mt-3 op" style={{ width: '300px', height: '40px', borderRadius: '8px' }}>
                                                <input value={values.waxAccount} onChange={handleChange} className="op pl-2" type="text" placeholder="Enter wax account" style={{ width: '100%', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                            </div>
                                            <button disabled={values.waxAccount.length < 9} className="btn bg-bt text-white mb-0 mt-3 ml-2" style={{ borderRadius: '10px', height: '40px' }} ><p>Join</p></button>
                                        </div>
                                    </form>
                                </div> : <div>
                                    <div style={{ width: "100%", border: "2px dashed #0bb634" }}>
                                        <p className="text-center font-weight-bold cl mb-0 mt-4" style={{ fontSize: "140%" }}>Whitelist has been saved</p>
                                        <div className="text-center mb-3 mt-2">
                                            <NavLink exact to="/white-list" onClick={onProgress}>
                                                <div className="btn text-white " style={{ background: '#0bb634', borderRadius: '10px' }}><p className="mb-0">See here</p></div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <GecoInfoPc />
                </div>
            </div>
            <div id="mb_box" style={{ display: 'none', width: '100%', height: '100vh', margin: 0 }}>
                <MenuHeaderMb onProgress={onProgress} />
                <MenuBottomMb onProgress={onProgress} setActive="" />
                <div style={{ width: '100%', background: '#f9fafc', paddingTop: '50px', paddingBottom: '60px', height: '100vh' }}>
                    <div style={{ width: '100%', padding: '10px' }}>
                        <img alt="" src="images/banners/banner.jpg" width="100%" style={{ borderRadius: '10px', maxHeight: '444px' }} />
                        <div className="mt-2" style={{ width: '100%' }}>
                            <div className="p-2" style={{ width: '100%', borderRadius: '10px', background: '#fff' }}>
                                <p className="font-weight-bold mb-1" style={{ fontSize: '130%' }}>Join White List</p>

                                {success ? <div className="mb-3">
                                    <p className="font-weight-bold mb-0">Whitelisted here, you may have a chance to purchase a bundle of NFTs in the upcoming release. Quantities are limited, Hurry up to become a member of us</p>
                                    <form onSubmit={submitForm}>
                                        <div style={{ display: 'flex' }}>
                                            <div className="mt-3 op" style={{ width: '300px', height: '40px', borderRadius: '8px' }}>
                                                <input value={values.waxAccount} onChange={handleChange} className="op pl-2" type="text" placeholder="Enter wax account" style={{ width: '100%', height: '100%', outline: 'none', border: 0, borderRadius: '8px' }} />
                                            </div>
                                            <button disabled={values.waxAccount.length < 9} className="btn bg-bt text-white mb-0 mt-3 ml-2" style={{ borderRadius: '10px', height: '40px' }} ><p>Join</p></button>
                                        </div>
                                    </form>
                                </div> : <div>
                                    <div style={{ width: "100%", border: "2px dashed #0bb634" }}>
                                        <p className="text-center font-weight-bold cl mb-0 mt-4" style={{ fontSize: "140%" }}>Whitelist has been saved</p>
                                        <div className="text-center mb-3 mt-2">
                                            <NavLink exact to="/white-list" onClick={onProgress}>
                                                <div className="btn text-white " style={{ background: '#0bb634', borderRadius: '10px' }}><p className="mb-0">See here</p></div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>}



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinWhiteList;