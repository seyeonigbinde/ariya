import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {



    return (
        <header>
            <div className="header_banner">
                <div className="header_logo">
                    {/* <img src="" alt=""/> */}
                    <h1>ARIYA</h1>
                </div>
                <div className="header_signup">
                    <button>User Signup</button>
                    <button>Service Provider Signup</button>
                    <button>Login</button>
                </div>
            </div>
            <nav>
                <Link href="#">Catering Services </Link>
                <Link href="#">Media Services </Link>
                <Link href="#">Venues </Link>
                <Link href="#">Entertainment </Link>
                <Link href="#">Decorations </Link>
                <Link href="#">Make-up Artists </Link>
            </nav>
        </header>
    )
}

export default Header