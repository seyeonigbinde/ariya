import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {



    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                    <h1>ARIYA</h1>
                    <div className="footer_socials">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div className="footer_items" >
                    <h4>Useful Links</h4>
                    <Link>Company</Link>
                    <Link>Blog</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Use</Link>
                </div>
                <div className="footer_items" >
                    <h4>Support</h4>
                    <Link>FAQs</Link>
                    <Link>Contact Us</Link>
        
                </div>
                <div className="footer_items" >
                    <h4>About ARIYA</h4>
                    <p>ARIYA is an online marketplace, specifically designed for the event industry in Nigeria. Simply put, you can fulfill all your event hosting needs in here.</p>
                </div>
            </section>
            <hr/>
            <section className="footer_copyright">
            <p>Copyright &copy; 2021 || Designed by Stevens Design Tech.</p>
            </section>
        </footer>
    )
}

export default Footer