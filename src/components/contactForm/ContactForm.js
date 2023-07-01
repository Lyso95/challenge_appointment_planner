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
      <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={name} id="name" setName={e => setName(e.target.value)}/>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" defaultValue={phone} id="phone" setPhone={e => setPhone(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" defaultValue={email} id="email" setEmail={e => setEmail(e.target.value)} />
        <input type="submit" id="submit" value="Submit" />
      </form>
    </>
  );
};

