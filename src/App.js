import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCustom from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import ContactContextProvider from "./Context/Context";
const App = () => {
  return (
    <>
      <ContactContextProvider>
        <NavbarCustom />
        <MainRoutes/>
      </ContactContextProvider>
    </>
  );
};

export default App;
