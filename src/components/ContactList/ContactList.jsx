import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { contactContext } from '../../Context/Context';

const ContactList = () => {
    const { contacts, getContacts, deleteContacts, editContact } = useContext(contactContext);
  console.log(contacts)
  
  useEffect(()=> {
    getContacts()
  }, [])
    return (
        <div className='contactList-page'>
            {contacts.map((item) =>(
               <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.lastName}</li>
                <li>{item.phone}</li>

                <button onClick={()=>editContact(item.id)}>EDIT</button>
                <button onClick={()=>deleteContacts(item.id)}>DELETE</button>
               </ul>
            ))}
        </div>
    );
};

export default ContactList;