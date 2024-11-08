"use client";

import Image from "next/image";
import React, { useState } from "react";
import Spinner from "@/components/Spinner";
import axios from "axios";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("none");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/mail", {
        name,
        email,
        role,
        phone,
        query,
      });
      const res: any = response.data;

      if (res.success) {
        setMessage("Registration Successful. We Will get back to you shortly.");
        setModal(true);
      }
    } catch (error) {
      console.log(error);
      setMessage("Registration Failed. Try again later");
      setModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="py-20 px-4 w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-2xl md:text-4xl text-mGreen font-bold">
          REGISTRATION FORM
        </h1>
        <p className="text-gray-500 font-semibold text-sm mt-2">
          Register with us and we shall get back to you shortly
        </p>
        <div className="flex flex-col md:flex-row w-full mx-auto mt-10 items-center justify-center">
          <Image
            className="w-full md:w-1/2 lg:w-1/3 ml-auto"
            src="/register.svg"
            width={500}
            height={500}
            alt="Register Image"
          />
          <form
            className="flex flex-col w-full max-w-screen-md mx-auto"
            onSubmit={handleSubmit}
          >
            <label className="labels" htmlFor="name">
              Name
            </label>
            <input
              required
              className="inputs"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="labels" htmlFor="email">
              Email
            </label>
            <input
              required
              className="inputs"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="labels" htmlFor="role">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="inputs"
              name="role"
              id="role"
            >
              <option disabled value="none">
                Select a role
              </option>
              <option value="innovator">
                Innovator(Want to pitch your ideas)
              </option>
              <option value="incubator">
                Incubator(Want to support our student&apos; startups)
              </option>
              <option value="mentor">
                Mentor(Want to mentor our students)
              </option>
              <option value="volunteer">
                Volunteer(Want to volunteer for projects)
              </option>
            </select>

            <label className="labels" htmlFor="phone">
              Phone
            </label>
            <input
              className="inputs"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label className="labels" htmlFor="query">
              Ask your Query
            </label>
            <textarea
              placeholder="Your query"
              className="inputs"
              name="query"
              id="query"
              cols={30}
              rows={10}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></textarea>
            <button
              className="bg-mGreen px-4 py-2 text-xl text-white font-medium rounded-xl w-max mx-auto mt-6"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-center mb-4">Success!</h2>
            <p className="text-center">{message}</p>
            <button
              className="bg-mGreen px-4 py-2 text-white font-medium rounded-lg mt-4 mx-auto block"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
