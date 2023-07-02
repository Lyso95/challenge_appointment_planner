import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
//TODO: RegEx for Entries!!!
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={name} id="name" onChange={e => setName(e.target.value)}/>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" defaultValue={phone} id="phone" onChange={e => setPhone(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" defaultValue={email} id="email" onChange={e => setEmail(e.target.value)} />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </>
  );
};

