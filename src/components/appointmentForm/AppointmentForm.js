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
      <form id="appointmentForm" name="appointmentForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Title: {title}</label>
          <input type="text"id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
          <label htmlFor="date">Date: {date}</label>
          <input type="date" name="date" min={getTodayString} value={date} id="date" onChange={e => setDate(e.target.value)} />
          <label htmlFor="time">Time: {time}</label>
          <input type="time" id="time" name="time" value={time} onChange={e => setTime(e.target.value)}/>
          <label>Contact:</label>
          <ContactPicker contacts={contacts} contact={contact} setContact={setContact}/>
          <input type="submit" value="Submit" />
        </form>
      </>
  );
};
