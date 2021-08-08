import React from 'react'
import {Link} from 'react-router-dom'

import Header from './Header'

const Homepage = () => {




    return (
        <section>
            <Header />
            <div className="banner_bg">
                <div className="banner_caption">
                    <h1>Find Local Event Service Providers.</h1>
                    <form>
                        <label>
                        <input type="search" className="home_searchform" placeholder="Search Here" />
                        Search</label>
                    </form>
                </div>
            </div>
            <section className="categories">
                <h2>Search by Categories </h2>
                <div className="categories_container">
                    <Link className="categories_list">
                        <i class="fas fa-map-marker-alt fa-5x"></i>
                        <h4>Venues</h4>
                        <p>Wedding Venues, Outdoor Wedding Venues, Party Venues, Banquet Halls ... </p>
                    </Link>
                    <Link className="categories_list">
                        <i class="fas fa-camera fa-5x"></i>
                        <h4>Media</h4>
                        <p>Photographers, Wedding Photographers , Videographers, Live Streaming ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i class="fas fa-utensils fa-5x"></i>
                        <h4>Food</h4>
                        <p>Catering Services, Wedding Catering, Wedding Cakes, Beverages ...</p>
                    </Link>
                    <Link className="categories_list">
                        <i class="fas fa-music fa-5x"></i>
                        <h4>Entertainment</h4>
                        <p>Comedians, Music Bands, Wedding Bands, DJs, Singers, Dancing Groups ...</p>
                    </Link>
                    <Link className="categories_list">
                    <i class="fas fa-gift fa-5x"></i>
                        <h4>Decoration</h4>
                        <p>Florists, Wedding Florists , Party Decorations, Wedding Decorators, Fireworks ...</p>
                    </Link>
                    <Link className="categories_list">
                        <img src="" alt=""/>
                        <h4>Salon</h4>
                        <p>Salons, Bridal Hair Stylist, Female Dressing , Male Dressing , Makeup Services ... </p>
                    </Link>
                    <Link className="categories_list">
                    <i class="fas fa-chair"></i>
                        <h4>Equipment</h4>
                        <p>Outdoor Tents, Wedding Tents, Party Tent Rentals, Party Lights, Event Tables ... </p>
                    </Link>
                    <Link className="categories_list">
                    <i class="fas fa-car-side"></i>
                        <h4>Transportation</h4>
                        <p>Wedding Cars, Transport Services, Limousine Services, Rent Vehicles etc</p>
                    </Link>
                </div>
            </section>
        </section>

    )
}

export default Homepage