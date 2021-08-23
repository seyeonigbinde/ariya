import React from 'react'
import ariya_banner from '../images/ariya_banner.jpeg'
import Popup from "reactjs-popup";

const contentStyle = {
    maxWidth: "600px",
    width: "90%",
    borderColor: "#095580",
    color: "#095580",
    backgroundColor: "#fff"
};


const Venue = () => {

    return (
        <>
            <div className="vendor_card">
                <div className="vendor_card_package">
                    Standard
                        </div>
                <div className="vendor_card_name">
                    <h4>Divine Grace</h4>
                </div>
                <div className="vendor_card_category">
                    <p> Event Center</p>
                </div>
                <div className="vendor_card_logo">
                    <img src={ariya_banner} alt="" />
                </div>
                <div className="vendor_card_footer">
                    <div>
                        <h5> N1,000,000</h5>
                    </div>
                    <div>
                        <Popup
                            trigger={<button>View Profile</button>}
                            modal
                            contentStyle={contentStyle}>
                            {close => (
                                <div className="modal">
                                    <a href="#1"className="close" onClick={close}>
                                        &times;
                                    </a>
                                    <div className="header"> Divine Grace </div>
                                    <div className="content">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                                        nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                                        quibusdam voluptates delectus doloremque, explicabo tempore dicta
                                        adipisci fugit amet dignissimos?
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                        sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                                        repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                                        alias. Vitae?
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
            <div className="vendor_card">
                <div className="vendor_card_package2">
                    Economy
                        </div>
                <div className="vendor_card_name">
                    <h4>Divine Grace</h4>
                </div>
                <div className="vendor_card_category">
                    <p> Event Center</p>
                </div>
                <div className="vendor_card_logo">
                    <img src={ariya_banner} alt="" />
                </div>
                <div className="vendor_card_footer">
                    <div>
                        <h5> N500,000</h5>
                    </div>
                    <div>
                    <Popup
                            trigger={<button>View Profile</button>}
                            modal
                            contentStyle={contentStyle}>
                            {close => (
                                <div className="modal">
                                    <a href="#1" className="close" onClick={close}>
                                        &times;
                                    </a>
                                    <div className="header"> Divine Grace </div>
                                    <div className="content">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                                        nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                                        quibusdam voluptates delectus doloremque, explicabo tempore dicta
                                        adipisci fugit amet dignissimos?
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                        sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                                        repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                                        alias. Vitae?
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
            <div className="vendor_card">
                <div className="vendor_card_package">
                    Standard
                        </div>
                <div className="vendor_card_name">
                    <h4>Divine Grace</h4>
                </div>
                <div className="vendor_card_category">
                    <p> Event Center</p>
                </div>
                <div className="vendor_card_logo">
                    <img src={ariya_banner} alt="" />
                </div>
                <div className="vendor_card_footer">
                    <div>
                        <h5> N1,000,000</h5>
                    </div>
                    <div>
                    <Popup
                            trigger={<button>View Profile</button>}
                            modal
                            contentStyle={contentStyle}>
                            {close => (
                                <div className="modal">
                                    <a  href="#1" className="close" onClick={close}>
                                        &times;
                                    </a>
                                    <div className="header"> Divine Grace </div>
                                    <div className="content">
                                        {" "}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
                                        nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                                        quibusdam voluptates delectus doloremque, explicabo tempore dicta
                                        adipisci fugit amet dignissimos?
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                        sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
                                        repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
                                        alias. Vitae?
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Venue
