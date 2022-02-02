import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import './App.styled.jsx';
import MyForm from './MyForm/MyForm';
import ContactsList from './ContatsList/ContatsList';
import Filter from './Filter/Filter';
import { Container, TitleMain } from './App.styled';
import Section from './section/Section';
import useLocalStorage from '../hooks/useLocalStorage';
const LS_KEY = 'name_id';
function App(defaultValue) {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const addContact = ({ name, number }) => {
    contacts.find(
      contact =>
        name.toLowerCase() === contact.name.toLowerCase() ||
        number === contact.number,
    )
      ? alert(`Contact ${name} or number ${number}is already in contacts`)
      : setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
  };
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const changeFilter = e => {
    const filter = e.currentTarget.value.toLowerCase();
    setFilter(filter);
  };
  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  return (
    <Container>
      <GlobalStyle />
      <TitleMain>Phonebook</TitleMain>
      <Section>
        <MyForm onSubmit={addContact} onChange={changeFilter} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        ></ContactsList>
      </Section>
    </Container>
  );
}
export default App;
