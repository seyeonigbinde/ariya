import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

const Homepage = () => {




    return (
        <section>
            <Header />
            <div className="banner_bg">
                <div className="banner_caption">
                    <h1><b>Find Local Event Service Providers.</b></h1>
                    <h5>Nigeria No.1 Marketplace for Event Planners</h5>
                    <form>
                        <input type="search" className="home_searchform" placeholder="Search Here" />
                        <button>Search </button>
                    </form>
                </div>
            </div>
            <section className="categories">
                <h2>Search by Categories </h2>
                <div className="categories_container">
                    <Link className="categories_list">
                        <i className="fas fa-map-marker-alt fa-5x"></i>
                        <h4>Venues</h4>
                        <p>Event Centers, Banquet Halls, Outdoor Party Venues ... </p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-camera fa-5x"></i>
                        <h4>Media</h4>
                        <p>Photographers, Videographers ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-utensils fa-5x"></i>
                        <h4>Food</h4>
                        <p>Catering Services, Wedding Cakes, Party Cakes, Small Chops ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-music fa-5x"></i>
                        <h4>Entertainment</h4>
                        <p>Comedians, Music Bands, MCs, DJs, Dancing Groups ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-gift fa-5x"></i>
                        <h4>Decoration</h4>
                        <p>Florists, Decorators, Lights, Fireworks ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-cut fa-5x"></i>
                        <h4>Salon Services</h4>
                        <p>Salons, Bridal Hair Stylist , Makeup Services ... </p>
                    </Link>
                    <Link className="categories_list">
                        <i className="far fa-lightbulb fa-5x"></i>
                        <h4>Equipment</h4>
                        <p>Outdoor Tents Rentals, Event Tables & Chairs... </p>
                    </Link>
                    <Link className="categories_list">
                        <i className="fas fa-car fa-5x"></i>
                        <h4>Transportation</h4>
                        <p>Wedding Cars, Transport Services, Limousine Services etc</p>
                    </Link>
                </div>
            </section>
            <section className="howitworks">
                <h3>How It Works</h3>
                <section className="howitworks_container">
                    <div className="howitworks_items">
                    <i class="far fa-calendar-alt fa-3x"></i>
                        <p>Step 1</p>
                        <h5>Create an Event</h5>
                    </div>
                    <div className="howitworks_items">
                    <i class="fas fa-users fa-3x"></i>
                        <p>Step 2</p>
                        <h5>Search & Select Service Providers</h5>
                    </div>
                    <div className="howitworks_items">
                    <i class="far fa-calendar-check fa-3x"></i>
                        <p>Step 3</p>
                        <h5>Confirm and Place the Order</h5>
                    </div>
                    <div className="howitworks_items">
                    <i class="fas fa-glass-martini fa-3x"></i>
                        <p>Step 4</p>
                        <h5>Enjoy the Event & Submit a Feedback</h5>
                    </div>
                </section>
            </section>
            <Footer />
        </section>

    )
}

export default Homepage