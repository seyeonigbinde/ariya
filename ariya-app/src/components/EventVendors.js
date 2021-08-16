import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Venue from './Venue'
import Transport from './Transport'
import Salon from './Salon'
import Media from './Media'
import Equipment from './Equipment'
import Decoration from './Decoration'
import Catering from './Catering'

const EventVendors = () => {




    return (
        <section>
            <Header />
            <section className="vendor_banner">
                <form>
                    <input type="search" className="vendor_searchform" placeholder="Search Event Provider" />
                    <button>Search </button>
                </form>
            </section>
            <section className="vendor_page">
                <section className="vendor_sidebar">
                    <h5>Budget</h5>
                </section>
                <section className="vendor_dashboard">
                    <Switch>
                        <Route path="/event_vendor/venue">
                            <Venue />
                        </Route>
                        <Route path="/event_vendor/catering">
                            <Catering />
                        </Route>
                        <Route path="/event_vendor/decoration">
                            <Decoration />
                        </Route>
                        <Route path="/event_vendor/equipment">
                            <Equipment />
                        </Route>
                        <Route path="/event_vendor/media">
                            <Media />
                        </Route>
                        <Route path="/event_vendor/salon">
                            <Salon />
                        </Route>
                        <Route path="/event_vendor/transport">
                            <Transport />
                        </Route>
                    </Switch>
                </section>
            </section>
            <Footer />
        </section>
    )
}

export default EventVendors
