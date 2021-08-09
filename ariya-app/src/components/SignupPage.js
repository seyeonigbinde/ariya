import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import UserSignup from './UserSignup'
import VendorSignup from './VendorSignup'

const SignupPage = () => {



    return (
        <section>
            <aside>

            </aside>
            <section>
                <div>
                    <NavLink activeStyle={{ borderBottom: "4px solid #81b214", color: "#095580", textDecoration: "none" }} to="/signup/user-signup"><b>Event Organizer</b></NavLink>
                    <NavLink activeStyle={{ borderBottom: "4px solid #81b214", color: "#095580", textDecoration: "none" }} to="/signup/vendor-signup"><b>Event Vendor</b></NavLink>
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
            </section>
        </section>
    )
}

export default SignupPage