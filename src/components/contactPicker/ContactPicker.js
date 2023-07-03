import React from "react";

export const ContactPicker = ({contact, setContact, contacts}) => {
  return (
    <>
      <select name="contact" 
              id="contact" 
              value={contact} 
              onChange={e => setContact(e.target.value)}
      >
        <option key="default" value="">No Contact selected</option>
        {
        contacts?.map((el, i) => {
          <option key={i} value={el.name}>{el.name}</option>
        })
        }
      </select>
    </>
  );
};
