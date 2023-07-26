import React, { useState, useEffect } from 'react'
const ContactRow = ({ setSelectedContactId, contact }) => {
  return (
    <tr className='duh'
      onClick={() => {
        setSelectedContactId(contact.id)
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const data = await response.json()
        setContacts(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name <img src="https://icons.veryicon.com/png/o/construction-tools/defense-key-lock-series/name-tag.png" alt="" /></th>
          <th>Email <img src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png" alt="" /></th>
          <th>Phone <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" /></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
