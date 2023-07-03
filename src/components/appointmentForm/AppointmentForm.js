import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("de-DE")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" defaultValue={title} id="name" onChange={e => setTitle(e.target.value)}/>
          <label htmlFor="contact">contact:</label>
          <ContactPicker contact={contact} contacts={contacts} onChange={e => setContact(e.target.value)}/>
          <label htmlFor="date">Date:</label>
          <input type="date" name="date" defaultValue={getTodayString} id="date" onChange={e => setDate(e.target.value)} />
          <input type="time" name="time" defaultValue={time} id="time" onChange={e => setTime(e.target.value)}/>
          <input type="submit" id="submit" value="Submit" />
        </form>
      </>
  );
};
