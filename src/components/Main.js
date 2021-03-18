import React, {useState} from "react";
import hero from "../svg/hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
    return(
        <React.Fragment>
            <h1 className="first-header">Invest With Us, Let's Grow Together.</h1>
            <header>
                <img src={hero} />
                <div>
                    <h1>We Help YOU! <br/> Acheive <br/> your GOALS!!!.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus congue dignissim. Vestibulum et ex nisl. Vestibulum eu luctus nisi. Fusce sit amet vehicula nisl. </p>
                    <Link to="/">Get in touch</Link>
                </div>
          
            </header>
            <main>
                <section className="services">
                     <h2>Why Take A Loan From Us?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">
                            <h3>SEO Friendly.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>

                         </div>
                    </div>

                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Let us grow together.</h3>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                      </div>
                    </div>

                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter">
                        <input type="email" placeholder="Your email goes here" />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>
        </React.Fragment>
    )
}


export default Main;