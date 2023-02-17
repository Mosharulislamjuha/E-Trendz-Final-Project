import React, { Fragment } from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/header/Navbar";
import MetaData from "../../../components/MetaData";
import styles from "./Success.module.scss";
import {Link, useParams} from "react-router-dom";
import {removeItemFromCart} from "../../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const Success = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const {id} = useParams()
    const removeCartItemHandler = () => {
        console.log(id)
        dispatch(removeItemFromCart(id));
        console.log(cartItems, "cartItemsss")
    };

    return (
        <Fragment>
            <MetaData title={"Success"} />
            <Navbar />
            <div className={styles.success}>
                <div className="svg-container">
                    <svg
                        className="ft-green-tick"
                        xmlns="http://www.w3.org/2000/svg"
                        height="100"
                        width="100"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <circle
                            className={styles.circle}
                            fill="#5bb543"
                            cx="24"
                            cy="24"
                            r="22"
                        />
                        <path
                            className={styles.tick}
                            fill="none"
                            stroke="#FFF"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M14 27l5.917 4.917L34 17"
                        />
                    </svg>
                </div>
                <Link to={'/'}><button onClick={removeCartItemHandler
                }>Go to Home</button></Link>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Success;
