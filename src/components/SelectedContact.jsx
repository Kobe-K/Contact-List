import React, { useState, useEffect } from 'react'

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json()
        setContact(data)
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact()
    }
  }, [selectedContactId])

  if (!contact) {
    return null 
  }

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
      <br />
      <br />
      <button onClick={() => location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Secret</button>
    </div>
  )
}

export default SelectedContact