import { ContactItem } from "./ElementListContacts.styled.jsx";
import React from "react";
import PropTypes from "prop-types";

export default function ElementListContacts({ name, number, children }) {
  return (
    <ContactItem>
      <p>{name}:</p>
      <p>{number}</p>
      {children}
    </ContactItem>
  );
}

ElementListContacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
