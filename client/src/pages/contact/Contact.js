import React, {Fragment, useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import styles from "./Contact.module.scss";
import { FcBusinessContact } from "react-icons/fc";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import MetaData from "../../components/MetaData";
import {axiosInstance} from "../../config";
import { Link } from "react-router-dom";

const Contact = () => {
    const contacts = [
        {
            icon: <FcBusinessContact size={50} />,
            text1: "Tel: 01858098309",
            text2: "Email:etrendz.offcial2023@gmail.com",
        },
        
        
    ];

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [des, setDes] = useState('')

    const handleContactSend = async (e) => {
        e.preventDefault()
        if(name.length < 1 || email.length < 1 || des.length <1){
            alert("please provide valid information")
        }else{
            const { data } = await axiosInstance.post(
                "/api/v1/contactSave",
                {
                    email: email,
                    name: name,
                    des: des
                }

            );
            alert("Contact Recived")
        }
    }
    return (
        <Fragment>
            <MetaData title={"Contact"} />
            <Navbar />
            <div className={styles.contact}>
                <div className={styles.contact_title}>
                    <div className="container">
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div className={styles.contact_info}>
                    <div className="container mt-5">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className={styles.about}>
                                    <h4>Information About Us</h4>
                                    <p className="mt-3">
                                    E-Trendz is a Professional eCommerce Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of eCommerce, with a focus on dependability and online shopping.!
                                    </p>
                                    <div>
                                        
                                        <Link to={"www.facebook.com"}><span>
                                            <FaFacebook size={40} />
                                        </span></Link> 
                                        <span>
                                            <BsInstagram size={40} />
                                        </span>
                                        <span>
                                            <BsYoutube size={40} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.contact}>
                                    <h4>Contact Way</h4>
                                    <div className="row g-3 mt-2">
                                        {contacts.map((contact, index) => (
                                            <div
                                                className="col-md-6"
                                                key={index}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div>{contact.icon}</div>
                                                    <div className="ms-3">
                                                        <p>{contact.text1}</p>
                                                        <p>{contact.text2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contact_form}>
                    <div className="container">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <h3>Get In Touch</h3>
                                <form className={styles.form}>
                                    <div className={styles.from_group}>
                                        <label htmlFor="name_field">Name</label>
                                        <input
                                            onChange={(e)=> setName(e.target.value)}
                                            type="text"
                                            placeholder="Enter your name ..."
                                        />
                                    </div>
                                    <div className={styles.from_group}>
                                        <label htmlFor="email_field">
                                            Email
                                        </label>
                                        <input
                                            onChange={(e)=> setEmail(e.target.value)}
                                            type="email"
                                            placeholder="Enter your email ..."
                                        />
                                    </div>
                                    <div className={styles.from_group}>
                                        <label htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            onChange={(e)=> setDes(e.target.value)}
                                            placeholder="Enter your text ..."
                                            cols="8"
                                        ></textarea>
                                    </div>

                                    <div className={styles.from_group}>
                                        <button onClick={(e) => handleContactSend(e)} type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.contact_img}>
                                    <img
                                        src="https://res.cloudinary.com/mehedi08h/image/upload/v1648703985/shopx/Contact_us-rafiki_efzxlu.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Contact;
