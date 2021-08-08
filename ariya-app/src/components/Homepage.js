import React from 'react'
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
        </section>

    )
}

export default Homepage