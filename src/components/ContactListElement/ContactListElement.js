import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import css from './ContactListElement.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilterValue,
} from 'components/store/Contacts/selectors';
import { upDate } from 'components/store/Contacts/filterSlice';

const ContactListElement = ({ handleDeleteContact }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue); // Получите значение фильтра из хранилища Redux
  const contacts = useSelector(getContacts);

  const filteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  useEffect(() => {
    const filteredContactsRedux = filteredList(); // Вызовите функцию filteredList для фильтрации контактов
    // Обновите состояние Redux с отфильтрованным списком контактов
    dispatch(upDate(filteredContactsRedux));
  }, [filter, dispatch]);

  const filteredContacts = useSelector(getContacts);
  // Получите отфильтрованный список контактов из хранилища Redux

  return (
    <li className={css.contactElement}>
      {filteredContacts.map(contact => (
        <div key={contact.id}>
          <p>{contact.name}:</p>
          <p>{contact.number}</p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </li>
  );
};

// ContactListElement.propTypes = {
//   name: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
//   onClick: propTypes.func,
// };

export default ContactListElement;
