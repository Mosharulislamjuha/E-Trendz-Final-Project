import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_info}>
                <div className="container">
                    <div className="row g-3">
                        {/* about us  */}
                        <div className="col-md-3">
                            <div className={styles.about_us}>
                                <h5>About Us</h5>
                                <div>
                                    <p>
                                    E-Trendz is a Professional eCommerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of eCommerce, with a focus on dependability and sells. We're working to turn our passion for eCommerce into a booming online website. We hope you enjoy our eCommerce as much as we enjoy offering them to you.I will keep posting more important posts on my Website for all of you. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* information  */}
                        <div className="col-md-3">
                            <div className={styles.information}>
                                <h5>Information</h5>
                                <div>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>FAQs</li>
                                    <li>Privacy Policy</li>
                                    <li>Refund policy</li>
                                    <li>Cookie Policy</li>
                                </div>
                            </div>
                        </div>
                        {/* customer service  */}
                        <div className="col-md-3">
                            <div className={styles.information}>
                                <h5>CUSTTOMER SERVICE</h5>
                                <div>
                                    <li>My Account</li>
                                    <li>Support Center</li>
                                    <li>Terms & Conditions</li>
                                    <li>Returns & Exchanges</li>
                                    <li>Shipping & Delivery</li>
                                </div>
                            </div>
                        </div>
                        {/* the optimal newsletter  */}
                        <div className="col-md-3">
                            <div className={styles.newsletter}>
                                <h5>THE OPTIMAL NEWSLETTER</h5>
                                <div>
                                    <p>
                                    Please give your support and love.Thanks For Visiting Our Site.Have a nice day!
                                    </p>
                                    <input type="email" />
                                    <button>
                                        <AiOutlineMail />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>© 2023 M.J.F All Rights Reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
