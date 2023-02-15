import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {clearErrors, login, register} from "../../../actions/userActions";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/header/Navbar";
import ButtonLoader from "../../../components/loader/ButtonLoader";
import MetaData from "../../../components/MetaData";
import styles from "./Register.module.scss";
import {axiosInstance} from "../../../config";

const Register = ({ history }) => {
  const navigate = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("");
  const [change, setChange] = useState(false);
  const [code, setCode] = useState("");
  const [codeVerifiaction, setCodeVerification] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(
    "https://res.cloudinary.com/mehedi08h/image/upload/v1647280872/react-final/auth/logo_wyrs86.png"
  );

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );
const [codeFromServer,setCodeFromServer] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault();

    if(user.email.length > 0){
      const { data } = await axiosInstance.post(
          "/api/v1/sendCode",
          {email: JSON.stringify(user.email)}
      );
      if(data.status===200){
        setIsCodeVerify(true)
        setShowInput(true)
      }
      setCodeFromServer(data.data)
    }
  };

  console.log(codeFromServer)
  const handleCheckCode = async (e)=>{
    e.preventDefault();
    console.log(code,"code")
    if(code == codeFromServer){
      console.log("enter")
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("avatar", avatar);
      dispatch(register(formData));

      // navigate.push("/");
    }else{
      alert("Invalid code")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(login(email, password));
      history.push("/successreg");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);

  const [isCodeVerify, setIsCodeVerify] = useState(false)

  // const handleEmailSend = async (e)=>{
  //   e.preventDefault()
  //   if(user.email.length > 0){
  //     const { data } = await axiosInstance.post(
  //         "/api/v1/sendCode",
  //         {email: JSON.stringify(user.email)}
  //     );
  //     if(data.status===200){
  //       setIsCodeVerify(true)
  //     }
  //   }
  //
  // }

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <MetaData title={"Register"} />
      <Navbar />
      <div className={styles.login}>
        <div className={styles.login_container}>
          <h3 className="text-center text-white mb-3">Register</h3>
          <form encType="multipart/form-data">
            <div className={styles.from_group}>
              <label htmlFor="anme_field">Name</label>
              <input
                type="text"
                placeholder="Enter your name ..."
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
            <div className={styles.from_group}>
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                placeholder="Enter your email ..."
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className={styles.from_group}>
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                placeholder="Enter your password ..."
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div className="mt-3">
                  <figure className="avatar mr-3 item-rtl">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                      src={avatarPreview}
                      alt="Avatar Preview"
                    />
                  </figure>
                </div>
                <div className="image_file ms-2">
                  <input
                    type="file"
                    name="avatar"
                    id="customFile"
                    accept="iamges/*"
                    onChange={onChange}
                  />
                  <AiOutlineCloudUpload size={20} />
                </div>
              </div>
            </div>
            {
              showInput && <>
                  <div className={styles.from_group}>
                    <input type={"text"} placeholder={"Please write verification code"} onChange={(e)=> setCode(e.target.value)}/>
                  </div>
                  <div className={styles.from_group}>
                    <input  type={"submit"} onClick={(e) => handleCheckCode(e)}/>
                  </div>
                </>
            }
            {!showInput && <div className={styles.from_group}>
              <button onClick={(e) => submitHandler(e)}>Verify your email</button>
            </div>}

          </form>
          <div className={styles.from_group}>
            <p className="text-center text-white">
              Already Have Account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Register;
