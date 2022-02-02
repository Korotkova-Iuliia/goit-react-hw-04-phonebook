import React, { useEffect, useState } from 'react';
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
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem(LS_KEY)) ?? defaultValue;
  // });

  // useEffect(
  //   LS_KEY => {
  //     const savedState = JSON.parse(localStorage.getItem(LS_KEY));
  //     if (savedState) {
  //       setContacts(contacts);
  //     }
  //   },
  //   [contacts],
  // );

  useEffect(() => {
    // localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    console.log(name, number);
    console.log(contacts);
    contacts.find(
      contact =>
        name.toLowerCase() === contact.name.toLowerCase() ||
        number === contact.number,
    )
      ? alert(`Contact ${name} or number ${number}is already in contacts`)
      : setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
    // setContacts(contacts => ({
    //   contacts: [...contacts, { id: nanoid(), name, number }],
    //   name,
    //   number,
    //   filter: '',
    // }));
  };
  const deleteContact = id => {
    setContacts(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  const changeFilter = e => {
    const { filter } = e.currentTarget.value.toLowerCase();
    setFilter(filter);
  };
  // const reset = () => {
  //   this.setState({ filter: '' });
  // };
  const getVisibleContacts = () => {
    console.log(contacts);
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const visibleContacts = getVisibleContacts();
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
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactsList>
      </Section>
    </Container>
  );
}
export default App;
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const savedState = JSON.parse(localStorage.getItem(LS_KEY));
//     if (savedState) {
//       this.setState({ contacts: savedState });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (contacts.length !== prevState.contacts.length) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//     }
//   }
//   addContact = values => {
//     const { name, number } = values;
//     const { contacts } = this.state;
//     contacts.find(
//       contact =>
//         name.toLowerCase() === contact.name.toLowerCase() ||
//         number === contact.number,
//     )
//       ? alert(`Contact ${name} or number ${number}is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [...contacts, { id: nanoid(), name, number }],
//           name,
//           number,
//           filter: '',
//         }));
//   };
//   deleteContact = id => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== id),
//     }));
//   };
//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value.toLowerCase() });
//   };
//   reset = () => {
//     this.setState({ filter: '' });
//   };
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
//   };
//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <GlobalStyle />
//         <TitleMain>Phonebook</TitleMain>
//         <Section>
//           <MyForm onSubmit={this.addContact} onChange={this.changeFilter} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactsList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           ></ContactsList>
//         </Section>
//       </Container>
//     );
//   }
// }
// export default App;
