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
                    <Link href="#">Catering Services </Link>
                    <div className="dropdown-content">
                        <Link>Wedding Catering</Link>
                        <Link>Catering Suppliers</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Media Services  </Link>
                    <div className="dropdown-content">
                        <Link>Wedding photographers</Link>
                        <Link>Wedding videographers</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Venues </Link>
                    <div className="dropdown-content">
                        <Link>Wedding venues</Link>
                        <Link>Party venues </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Entertainment </Link>
                    <div className="dropdown-content">
                        <Link>Wedding DJ</Link>
                        <Link> Music bands</Link>
                        <Link> Wedding dancers</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Decorations </Link>
                    <div className="dropdown-content">
                        <Link>Wedding lights</Link>
                        <Link>Wedding florist</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Salon Services </Link>
                    <div className="dropdown-content">
                        <Link>Wedding hair stylist</Link>
                        <Link>Wedding make-up artists</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Equipment</Link>
                    <div className="dropdown-content">
                        <Link>Wedding tents</Link>
                        <Link>Wedding tables & chairs</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="#">Transport Services </Link>
                    <div className="dropdown-content">
                        <Link>Wedding cars</Link>
                        <Link>Wedding buses</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header