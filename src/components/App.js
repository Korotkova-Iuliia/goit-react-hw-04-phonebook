import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import './App.styled.jsx';
import MyForm from './MyForm/MyForm';
import ContactsList from './ContatsList/ContatsList';
import Filter from './Filter/Filter';
import { Container, TitleMain } from './App.styled';
import Section from './section/Section';
const LS_KEY = 'name_id';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedState) {
      this.setState({ contacts: savedState });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }
  addContact = values => {
    const { name, number } = values;
    const { contacts } = this.state;
    contacts.find(
      contact =>
        name.toLowerCase() === contact.name.toLowerCase() ||
        number === contact.number,
    )
      ? alert(`Contact ${name} or number ${number}is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { id: nanoid(), name, number }],
          name,
          number,
          filter: '',
        }));
  };
  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };
  reset = () => {
    this.setState({ filter: '' });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <GlobalStyle />
        <TitleMain>Phonebook</TitleMain>
        <Section>
          <MyForm onSubmit={this.addContact} onChange={this.changeFilter} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </Section>
      </Container>
    );
  }
}
export default App;
