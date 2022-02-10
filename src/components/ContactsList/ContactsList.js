import React from "react";
import { ContactList, Button } from "./ContactsList.styled.jsx";
import PropTypes from "prop-types";
import ElementListContacts from "../ElementListContacts/ElementListContacts.js";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ElementListContacts key={id} name={name} number={number}>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </ElementListContacts>
      ))}
    </ContactList>
  );
}
ContactList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
