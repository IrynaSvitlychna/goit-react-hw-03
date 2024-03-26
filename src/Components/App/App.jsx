import { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

import './App.css'

const getInitialContakts = () => {
  // const savedClickes = window.localStorage.getItem("saved-clicks");
  // if (savedClickes !== null) {
  //   return JSON.parse(savedClickes);
  // }
  return (
     [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ]
  )
}

function App() {
  const [contacts, setContacts] = useState(getInitialContakts);
  const [inputValue, setInputValue] = useState("");
  
  
  
  // const handleChange = (evt) => {
  //   setInputValue(evt.target.value);
  // };


  const addContacts = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };
   
  const deleteContacts = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  }
  

  return (
    
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContacts} />

      <SearchBox value={inputValue} onChange={setInputValue} />

      <ContactList contacts={contacts} onDelete={deleteContacts} />
</div>  
  
  )
}

export default App
