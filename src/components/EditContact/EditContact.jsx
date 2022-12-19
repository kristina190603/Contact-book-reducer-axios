import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

const EditContacts = () => {
const {oneContact, changeContact} = useContext(contactContext)

const [newEditContact, setNewEditContact] = useState(oneContact)
useEffect(()=> {
  setNewEditContact(oneContact)
},[oneContact])

  return (
    <div style={{marginLeft: "30%", marginTop: "2%"}}>
      <input 
        onChange={()=>changeContact(item.name)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input style={{marginLeft: "20px"}}
        onChange={() =>changeContact(item.lastName) }
        type="text"
        placeholder="lastName"
        value={lastName}
      />
      <input style={{marginLeft: "19px"}}
        onChange={() => changeContact(item.phone)}
        type="text"
        placeholder="Number"
        value={phone}
      />
      <Button style={{marginLeft: "2%"}} variant="success" onClick={changeContact}>Save</Button>{' '}
    </div>
  );
};

export default EditContacts;
