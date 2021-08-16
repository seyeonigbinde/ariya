import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {



    return (
        <header>
            <div className="header_banner">
                <div className="header_logo">
                    {/* <img src="" alt=""/> */}
                    <Link to="/"> <h1>ARIYA</h1></Link>
                    <nav className="responsive_nav">
                        <div className="dropdown">
                            <i className="fas fa-bars fa-2x"></i>
                            <div className="dropdown-content">
                                <Link href="#">Catering Services </Link>
                                <Link href="#">Media Services  </Link>
                                <Link to="/venue">Venues </Link>
                                <Link href="#">Entertainment </Link>
                                <Link href="#">Decorations </Link>
                                <Link href="#">Salon Services </Link>
                                <Link href="#">Equipment</Link>
                                <Link href="#">Transport Services </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="header_signup">
                    <button><Link to="/signup/user-signup">User Signup</Link></button>
                    <button><Link to="/signup/vendor-signup">Vendor Signup</Link></button>
                    <button><Link to="/login">Login</Link></button>
                </div>
            </div>
            <nav className="desktop_nav">
                <div className="dropdown">
                    <Link to="/venue">Venues </Link>
                    <div className="dropdown-content">
                        <Link to="/venue">Event Centers</Link>
                        <Link to="/venue">Banquet Halls </Link>
                        <Link to="/venue">Outdoor Party Venues </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/catering">Catering Services </Link>
                    <div className="dropdown-content">
                        <Link to="/catering">Catering Services</Link>
                        <Link to="/catering">Wedding Cakes</Link>
                        <Link to="/catering">Party Cakes</Link>
                        <Link to="/catering">Small Chops</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/media">Media Services  </Link>
                    <div className="dropdown-content">
                        <Link to="/media">Photographers</Link>
                        <Link to="/media">Videographers</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/entertainment">Entertainment </Link>
                    <div className="dropdown-content">
                        <Link to="/entertainment">Comedians</Link>
                        <Link to="/entertainment">Event MCs</Link>
                        <Link to="/entertainment">Party DJs</Link>
                        <Link to="/entertainment"> Music bands</Link>
                        <Link to="/entertainment">Dancing Groups</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/decoration">Decorations </Link>
                    <div className="dropdown-content">
                        <Link to="/decoration">Lights & Fireworks</Link>
                        <Link to="/decoration">Florist</Link>
                        <Link to="/decoration">Decorators</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/salon">Salon Services </Link>
                    <div className="dropdown-content">
                        <Link to="/salon">Bridal Hair Stylists</Link>
                        <Link to="/salon">Make-up Artists</Link>
                        <Link to="/salon">Salons</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/equipment">Equipment</Link>
                    <div className="dropdown-content">
                        <Link to="/equipment">Outdoor Tents Rentals</Link>
                        <Link to="/equipment">Event Tables & Chairs</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="/transport">Transport Services </Link>
                    <div className="dropdown-content">
                        <Link to="/transport">Wedding Cars</Link>
                        <Link to="/transport">Limousine Services</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header