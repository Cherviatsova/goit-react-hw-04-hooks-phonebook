import React, { Component } from "react";
import {
  Label,
  Input,
  Button,
  ContactForm,
  Container,
} from "./Form.styled.jsx";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Container onSubmit={this.handleSubmit}>
        <ContactForm>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Add contact</Button>
        </ContactForm>
      </Container>
    );
  }
}

// Form.propTypes = { onAddContact: PropTypes.func.isRequired };

export default Form;
