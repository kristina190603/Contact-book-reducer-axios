import axios from "axios";
import React, { useReducer } from "react";
import { createContext } from "react";
import App from "../App";

export const contactContext = createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function getContacts() {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  }

//   async function changeContact(id, editObj) {
//     await axios.patch(`${API}/${id}`, editObj);
//     getContacts();
//   }
  const deleteContacts = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  const values = {
    addContact,
    getContacts,
    deleteContacts,
    contacts: state.contacts,
    changeContact,
  };
  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
