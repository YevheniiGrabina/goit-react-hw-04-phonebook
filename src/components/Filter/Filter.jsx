import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
  return (
    <label className={s.filterLabel}>
      {title}
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;