import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modal_login_bg_image from "../../assets/photos/ai_bg.jpeg";

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
      </Modal.Header> */}
      <Modal.Body className=" modal-content">
        <div className="w-full h-screen flex items-start ">
          <div className="relative w-1/2 h-full flex flex-col content-container">
            <div className="absolute top-[25%] left-[10%] flex flex-col">
              <h1 className="text-white text-4xl font-bold my-1">Jorie</h1>
              <p className="text-xl text-white font-light login-subtitle">
                Revolutionizing Healthcare and Finance
              </p>
            </div>
            <img
              src={modal_login_bg_image}
              alt=""
              className="w-full h-full object-cover modal-img"
            />
          </div>
          <div className="w-1/2 h-full bg-[#4cb5f5] flex flex-col p-8">
            <h1 className="text-base text-[#060606] font-semibold mb-1">
              Client Dashboard
            </h1>
            <div className="w-full flex flex-col max-w-[450px]">
              <div className="w-full flex flex-col mb-2">
                <h3 className="text-2xl font-semibold">User Login</h3>
                <p className="text-sm mb-2">Welcome Back, Please Log In</p>
              </div>

              <div className="w-full flex flex-col">
                <form>
                  <input
                    type="email"
                    className="w-full text-black outline-none border-b border-black focus:outline-none py-2 bg-transparent my-4 "
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="email"
                    className="w-full text-black  border-b outline-none border-black focus:outline-none py-2 bg-transparent"
                    placeholder="Enter Your Password"
                  />
                  <div className="w-full flex items-center justify-between">
                    {/* <div className="w-full flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mr-2 bg-transparent"
                    />
                    <p className="text-sm">Remember Me</p>
                  </div> */}
                    <div className="w-full flex flex-co my-4">
                      <button
                        className="w-full bg-[#060606] text-white rounded-md p-2 text-center flex items-center justify-center"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full flex items-center justify-center py-2 mt-10 ">
                <p className="text-sm font-normal  text-[#444444] contact-text ">
                  Issues with your account? Contact your administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
