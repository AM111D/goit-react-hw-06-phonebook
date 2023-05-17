import React from 'react';
import ContactListElement from 'components/ContactListElement/ContactListElement';
import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'components/store/Contacts/selectors';

const ContactList = props => {
  const contactsItems = useSelector(getContacts);
  console.log(contactsItems);
  return (
    <ul className={css.contactlist}>
      {contactsItems.map(contact => (
        <ContactListElement
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={() => props.deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      deleteContact: propTypes.func,
    })
  ),
};

export default ContactList;
