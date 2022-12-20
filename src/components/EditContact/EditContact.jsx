import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { contactContext } from "../../Context/Context";

const EditContacts = () => {
const {oneContact, getOneContact,editContact} = useContext(contactContext)
const [newEditContact, setNewEditContact] = useState(oneContact);

useEffect(() => {
  setNewEditContact(oneContact);
}, [oneContact])

console.log(newEditContact)

  return (
    <div style={{marginLeft: "30%", marginTop: "2%"}}>
      <input 
        value={newEditContact.name}
        onChange={(item)=>setNewEditContact({...oneContact, name: item.target.value})}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input style={{marginLeft: "20px"}}
      value={newEditContact.lastName}
        onChange={(item) =>setNewEditContact({...oneContact, lastName: item.target.value}) }
        type="text"
        placeholder="lastName"
        name="lastName"
      />
      <input style={{marginLeft: "19px"}}
      value={newEditContact.phone}
        onChange={(item) => setNewEditContact({...oneContact, phone: item.target.value})}
        type="text"
        placeholder="Number"
        name="phone"
      />
      <Button style={{marginLeft: "2%"}} variant="success" onClick={() => editContact(oneContact.id, newEditContact)}>Save</Button>{' '}
    </div>
  );
};

export default EditContacts;
