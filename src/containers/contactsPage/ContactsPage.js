import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
//import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [email, setEmail] = useState("");
 const [duplicate, setDuplicate] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let contact = Object.fromEntries(formData.entries());


    if(!duplicate){
      addContact(contact);
      setName("");
      setPhone("");
      setEmail("");
    }
    alert(contact);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() =>{
  contacts.find(co => co.name === name) ? setDuplicate(true) : setDuplicate(false);
 }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {duplicate && <h2>Duplicate entry of contact</h2>}
        <ContactForm 
          name={name} phone={phone} email={email}
          setName={setName} setPhone={setPhone} setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <hr />
        {/* <TileList contacts={contacts}/> */}
      </section>
    </div>
  );
};
