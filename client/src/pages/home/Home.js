import React, {Fragment, useEffect, useState} from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts } from "../../actions/productAction";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import MetaData from "../../components/MetaData";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Fashion from "./fashion/Fashion";
import {Modal} from "react-bootstrap";

const Home = () => {
    const [lgShow, setLgShow] = useState(true);

    const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  // filter products by types

  const mens = products.filter((item) => item.type === "Men");
  const womens = products.filter((item) => item.type === "Women");
  const kids = products.filter((item) => item.type === "Kids");

  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      return alert.error(error);
    }
  }, [dispatch, alert, error]);


  return (
    <Fragment>
        <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-center" id="example-modal-sizes-title-lg">
                        Get 25% discount
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center" style={{padding:"50px 0"}}>Please write "get25" copun to get 25% discount</Modal.Body>
            </Modal>
        </div>
      <MetaData title={"Home"} />
      <Navbar />
      <Banner />
      <Category />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Fashion products={mens} type="mens" />
          <Fashion products={womens} type="womens" />
          <Fashion products={kids} type="kids" />
        </>
      )}

      <Footer />
    </Fragment>
  );
};

export default Home;
