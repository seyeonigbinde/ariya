import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header_banner'>
        <div className='header_logo'>
          {/* <img src="" alt=""/> */}
          <Link to='/'>
            {' '}
            <h1>ARIYA</h1>
          </Link>
          <nav className='responsive_nav'>
            <div className='dropdown'>
              <i className='fas fa-bars fa-2x'></i>
              <div className='dropdown-content2'>
                <Link to='/event_vendor/catering'>Catering Services </Link>
                <Link to='/event_vendor/media'>Media Services </Link>
                <Link to='/event_vendor/venue'>Venues </Link>
                <Link to='/event_vendor/entertainment'>Entertainment </Link>
                <Link to='/event_vendor/decoration'>Decorations </Link>
                <Link to='/event_vendor/salon'>Salon Services </Link>
                <Link to='/event_vendor/equipment'>Equipment</Link>
                <Link to='/event_vendor/transport'>Transport Services </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className='header_signup'>
          <button>
            <Link to='/signup/user-signup'>User Signup</Link>
          </button>
          <button>
            <Link to='/signup/vendor-signup'>Vendor Signup</Link>
          </button>
          <button>
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </div>
      <nav className='desktop_nav'>
        <div className='dropdown'>
          <Link to='/event_vendor/venue'>Venues </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/venue'>Event Centers</Link>
            <Link to='/event_vendor/venue'>Banquet Halls </Link>
            <Link to='/event_vendor/venue'>Outdoor Party Venues </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/catering'>Catering Services </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/catering'>Catering Services</Link>
            <Link to='/event_vendor/catering'>Wedding Cakes</Link>
            <Link to='/event_vendor/catering'>Party Cakes</Link>
            <Link to='/event_vendor/catering'>Small Chops</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/media'>Media Services </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/media'>Photographers</Link>
            <Link to='/event_vendor/media'>Videographers</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/entertainment'>Entertainment </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/entertainment'>Comedians</Link>
            <Link to='/event_vendor/entertainment'>Event MCs</Link>
            <Link to='/event_vendor/entertainment'>Party DJs</Link>
            <Link to='/event_vendor/entertainment'> Music bands</Link>
            <Link to='/event_vendor/entertainment'>Dancing Groups</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/decoration'>Decorations </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/decoration'>Lights & Fireworks</Link>
            <Link to='/event_vendor/decoration'>Florist</Link>
            <Link to='/event_vendor/decoration'>Decorators</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/salon'>Salon Services </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/salon'>Bridal Hair Stylists</Link>
            <Link to='/event_vendor/salon'>Make-up Artists</Link>
            <Link to='/event_vendor/salon'>Salons</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/equipment'>Equipment</Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/equipment'>Outdoor Tents Rentals</Link>
            <Link to='/event_vendor/equipment'>Event Tables & Chairs</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to='/event_vendor/transport'>Transport Services </Link>
          <div className='dropdown-content'>
            <Link to='/event_vendor/transport'>Wedding Cars</Link>
            <Link to='/event_vendor/transport'>Limousine Services</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
