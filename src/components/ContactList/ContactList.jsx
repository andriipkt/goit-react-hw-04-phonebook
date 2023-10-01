import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul className={`list-group list-group-flush ${css.contactList}`}>
    {filteredContacts.map(contact => (
      <li key={contact.id} className={`list-group-item ${css.contactItem}`}>
        {contact.name}: {contact.number}
        <button
          className={`btn btn-secondary ${css.contactBtn}`}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
