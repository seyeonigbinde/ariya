import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import UserSignup from './UserSignup'
import VendorSignup from './VendorSignup'


const SignupPage = () => {



    return (
        <section>
            <Header/>
            <aside className="signup_pagelink">
                <div className="signup_switch">
                    <NavLink activeStyle={{ borderBottom: "4px solid ##F4D03F", 
                    color: "#095580", textDecoration: "none", fontSize: "1.2rem", backgroundColor: "#f1f1f1", borderRadius: "5px", padding: "1%" }} 
                    to="/signup/user-signup">Event Organizer </NavLink>  ||
                    <NavLink activeStyle={{ borderBottom: "4px solid ##F4D03F", 
                    color: "#095580", textDecoration: "none", fontSize: "1.2rem", backgroundColor: "#f1f1f1", borderRadius: "5px", padding: "1%"}} 
                    to="/signup/vendor-signup"> Event Vendor </NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/signup/user-signup">
                            <UserSignup />
                        </Route>
                        <Route path="/signup/vendor-signup">
                            <VendorSignup />
                        </Route>
                    </Switch>
                </div>
            </aside>
            <Footer/>
        </section>
    )
}

export default SignupPage