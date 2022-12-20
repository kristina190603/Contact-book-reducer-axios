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
        case "GET_ONE_CONTACT":
            return{...state, oneContact: action.payload}
      default:
      return state;
  }
}

// ! POST
const ContactContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }
// ! GET
  async function getContacts() {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  }
// ! CHANGE
async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
        type: "GET_ONE_CONTACT",
        payload: data,
    })
}

async function editContact(id, newObj) {
    await axios.patch(`${API}/${id}`, newObj)
    getContacts()
}
//   ! DELETE
  const deleteContacts = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  const values = {
    addContact,
    getContacts,
    deleteContacts,
    contacts: state.contacts,
    oneContact: state.oneContact,
    getOneContact,
    editContact,
  };
  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
