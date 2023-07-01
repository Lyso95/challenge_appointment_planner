import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContact] = useState([]);
 const [appointments, setAppointment] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 function addContact(contact){
  setContact((prev) => {
    console.log(contact)
    return [...prev, contact]
  });
 };
 function addAppointment({name, contact, date, time}){
  setAppointment((prev) => {
    return[...prev, {name, contact, date, time}]
  });
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage 
                                                    appointments={appointments}
                                                    addAppointment={addAppointment} 
                                                  /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
