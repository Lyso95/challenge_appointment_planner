import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (contacts, appointments, addAppointment) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    let formData = new FormData(e.target);
    let appointment = Object.fromEntries(formData.entries());
    addAppointment(appointment);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        name={name}
        contact={contact}
        date={date}
        time={time}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
        />
      </section>
    </div>
  );
};