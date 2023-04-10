import React, { useState } from "react";
import { client } from "../SanityConfig/client";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const notify = () => toast("We will contact you soon!");
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const formHandler = async (event) => {
    event.preventDefault();
    setSending(true);
    const newId = uuidv4();
    const contactData = {
      _id: newId,
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    setEmail("");
    setName("");
    setMessage("");

    client
      .createIfNotExists(contactData)
      .then((response) => {
        setSending(false);
        notify();
      })
      .catch((error) => {
        console.error("Error creating or replacing user:", error);
      });

    setSending(false);
  };

  return (
    <div className="container mt-24 px-6 mx-auto">
      <ToastContainer />
      <section className="mb-32 text-white">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2,
          }}
          className="flex flex-wrap bg-slate-800 p-4 py-16"
        >
          <div className="grow-0 shrink-0  basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">Contact us</h2>
            <p className="text-white mb-6">
              Welcome to our movie website, where we bring you the latest news,
              reviews, and updates from the world of cinema.
            </p>
            <p className="text-white mb-2">Haldwani Uttarakhand</p>
            <p className="text-white mb-2">+919876543210</p>
            <p className="text-white mb-2">dikshit.b.122@gmail.com</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form onSubmit={formHandler}>
              <div className="form-group mb-6">
                <input
                  onChange={nameHandler}
                  type="text"
                  className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                  value={name}
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  onChange={emailHandler}
                  value={email}
                  type="email"
                  className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  required
                  onChange={messageHandler}
                  value={message}
                  className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                w-full
                text-xs
                text-white
                px-6
                py-2.5
                font-medium
                leading-tight
                uppercase
                rounded
                shadow-md
                bg-gradient-to-r from-pink-600 to-red-600
                hover:bg-gradient-to-r
                hover:from-pink-800
                hover:to-red-800
                transition
                duration-300
                ease-in-out
               
                "
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
