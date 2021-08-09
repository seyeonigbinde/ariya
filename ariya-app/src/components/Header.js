import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {



    return (
        <header>
            <div className="header_banner">
                <div className="header_logo">
                    {/* <img src="" alt=""/> */}
                    <h1>ARIYA</h1>
                    <nav className="responsive_nav">
                        <div className="dropdown">
                            <i className="fas fa-bars fa-2x"></i>
                            <div className="dropdown-content">
                                <Link href="#">Catering Services </Link>
                                <Link href="#">Media Services  </Link>
                                <Link href="#">Venues </Link>
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
                    <button>User Signup</button>
                    <button>Vendor Signup</button>
                    <button>Login</button>
                </div>
            </div>
            <nav className="desktop_nav">
                <div className="dropdown">
                    <Link href="#">Venues </Link>
                    <div className="dropdown-content">
                        <Link>Event Centers</Link>
                        <Link>Banquet Halls </Link>
                        <Link>Outdoor Party Venues </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Catering Services </Link>
                    <div className="dropdown-content">
                        <Link>Catering Services</Link>
                        <Link>Wedding Cakes</Link>
                        <Link>Party Cakes</Link>
                        <Link>Small Chops</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Media Services  </Link>
                    <div className="dropdown-content">
                        <Link>Photographers</Link>
                        <Link>Videographers</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Entertainment </Link>
                    <div className="dropdown-content">
                        <Link>Comedians</Link>
                        <Link>Event MCs</Link>
                        <Link>Party DJs</Link>
                        <Link> Music bands</Link>
                        <Link>Dancing Groups</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Decorations </Link>
                    <div className="dropdown-content">
                        <Link>Lights & Fireworks</Link>
                        <Link>Florist</Link>
                        <Link>Decorators</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Salon Services </Link>
                    <div className="dropdown-content">
                        <Link>Bridal Hair Stylists</Link>
                        <Link>Make-up Artists</Link>
                        <Link>Salons</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Equipment</Link>
                    <div className="dropdown-content">
                        <Link>Outdoor Tents Rentals</Link>
                        <Link>Event Tables & Chairs</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Transport Services </Link>
                    <div className="dropdown-content">
                        <Link>Wedding Cars</Link>
                        <Link>Limousine Services</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header