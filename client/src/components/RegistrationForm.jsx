import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit form data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="picture">Profile Picture</label>
        <input type="file" id="picture" accept="image/*" onChange={handlePictureChange} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
