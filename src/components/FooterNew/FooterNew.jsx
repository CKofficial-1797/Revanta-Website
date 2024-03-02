import React from "react";
import Wave from "../../img/wave.png";
import "./FooterNew.css"
const FooterNew=()=>{
    return(
        <>
        <div><section className="info_section ">
            <div className="info_container layout_padding2">
                <div className="container">
                    <a href="" className=" navbar-brand ">
                        <div className="info_logo">Team <span className="Revanta"
                        >Revanta</span> 
                        </div>
                        </a>
                        <div className="info_main">
                            <div className="row">
                                <div className="col-md-3 col-lg-2">
                                    <div className="info_link-box">
                                        <h5 className="css">Useful Link</h5>
                                        <ul className="info_link-ul">
                                            <li className=" info_link-li"><a className=" " href="/">Home</a></li><li className="info_link-li"><a className=" " href="/ourteam">Team</a></li><li className="info_link-li"><a className=" " href="/achievements">Achievements</a></li><li className="info_link-li"><a className=" " href="/Gallery">Gallery</a></li><li className="info_link-li"><a className=" " href="/contact">Contact Us</a></li>
                                            </ul>
                                            </div></div>
                                            <div className="col-md-3 ">
                                                <h5 className="css">Manufacturing</h5>
                                            
                                            <p>Sokhi Enterprise Pvt Ltd sponsors us to do fabrication works.</p>
                                            </div>
                                            <div className="col-md-3 mx-auto  ">
                                                {/* <h5 className="css">social media</h5><div className="social_box">
                                                    <a href="https://www.facebook.com/aboutrevanta/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="https://in.linkedin.com/company/team-revanta" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a><a href="https://www.instagram.com/revanta_nit_jsr/?hl=en" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a></div></div> */}
                                                    </div>
                                                    <div className="col-md-3"><h5 className="css">Nit Jamshedpur</h5><p>NIT Jamshedpur is an Institute of National Importance for Technical Education located at Jamshedpur, Jharkhand, India and is directly under the control of the Ministry of Education&nbsp;(MHRD).</p></div></div></div><div className="info_bottom"><div className="row"><div className="col-lg-9"><div className="info_contact "><div className="row"><div className="col-md-4"><a href="https://maps.app.goo.gl/7X2tga4AHiFQ9gcn6" target="_blank" rel="noreferrer" className="link-box"><i className="fa fa-map-marker" aria-hidden="true"></i><span>Nit Jamshedpur</span></a></div><div className="col-md-4"><a href="https://wa.me/9155360718" target="_blank" rel="noreferrer" className="link-box"><i className="fa fa-phone" aria-hidden="true"></i><span>Call +91 9155360718</span></a></div><div className="col-md-2"><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=teamrevanta@gmail.com" target="_blank" rel="noreferrer" className="link-box"><i className="fa fa-envelope" aria-hidden="true"></i><span>revanta@nitjsr.ac.in</span></a></div></div></div></div></div></div></div></div><div className="designed">Designed By: <span>Chandrakant Gorain & Ayush Sahu </span></div></section><footer className="footer_section"><div className="container"><p>© <span id="displayYear"></span> All Rights Reserved By Team Revanta, Nit Jamshedpur</p></div></footer></div>
        </>
    )
}
export  default FooterNew ;