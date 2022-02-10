import React, { Component } from 'react';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';
import { Title, Container } from './App.styled';
import { nanoid } from 'nanoid';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getFilterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
