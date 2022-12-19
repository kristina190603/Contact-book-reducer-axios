import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { contactContext } from "../../Context/Context";

const EditContacts = () => {
const {oneContact, getOneContact,editContact} = useContext(contactContext)
console.log(contactContext)
const [newEditContact, setNewEditContact] = useState(oneContact)
useEffect(()=> {
  setNewEditContact(oneContact)
},[oneContact])

  return (
    <div style={{marginLeft: "30%", marginTop: "2%"}}>
      <input 
        onChange={(item)=>getOneContact(item.name)}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input style={{marginLeft: "20px"}}
        onChange={(item) =>getOneContact(item.lastName) }
        type="text"
        placeholder="lastName"
        name="lastName"
      />
      <input style={{marginLeft: "19px"}}
        onChange={(item) => getOneContact(item.phone)}
        type="text"
        placeholder="Number"
        name="phone"
      />
      <Button style={{marginLeft: "2%"}} variant="success" onClick={editContact}>Save</Button>{' '}
    </div>
  );
};

export default EditContacts;
