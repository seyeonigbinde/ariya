import React from 'react'
import ariya_banner from '../images/ariya_banner.jpeg'

const Decoration = () => {




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
                    <button>View Profile</button>
                </div>
            </div>
        </div>
        <div className="vendor_card">
            <div className="vendor_card_package">
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
                    <button>View Profile</button>
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
                    <button>View Profile</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Decoration
