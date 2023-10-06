import css from './Filter.module.css';
import PropTypes from 'prop-types';

function Filter({ handleFilter, value }) {
  return (
    <div>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        className={`form-control ${css.filterInput}`}
        name="filter"
        onChange={handleFilter}
        value={value}
      />
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
