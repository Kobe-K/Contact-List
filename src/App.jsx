import './App.css';
import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
};

export default App;