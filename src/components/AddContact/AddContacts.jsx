import React,{ useContext, useState } from "react";
import { contactContext } from "../../Context/Context";


const AddContact = () => {
  const [contact, setContact] = useState({ name: "", lastName: "", phone: "" });
  const { addContact } = useContext(contactContext);

  const handleChange = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  };
  return (
    <div className="addContacts-page">
      <input style={{marginLeft: "30%", marginTop:"8%"}}
        value={contact.name}
        placeholder="name"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input style={{marginLeft: "1%"}}
        value={contact.lastName}
        placeholder="lastName"
        name="lastName"
        onChange={(e) => handleChange(e)}
      />
      <input style={{marginLeft: "1%"}}
        value={contact.phone}
        placeholder="phone"
        name="phone"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => addContact(contact)}>ADD</button>
    </div>
  );
  
};

export default AddContact;