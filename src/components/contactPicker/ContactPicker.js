import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
    <input list="contact" name="contact"/>
      <datalist id="contact">
        <option value="No Contact Selected"/>
        {contacts?.map((el, i) => <option name={i} value={el}/>)}
      </datalist>
    </>
  );
};
