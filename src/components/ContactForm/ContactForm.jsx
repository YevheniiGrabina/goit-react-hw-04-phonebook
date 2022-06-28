import {useState} from 'react'
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

 const ContactForm = ({onSubmit}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


  const handleInputNameChange = e => {
    const { value } = e.currentTarget;
    
      setName(value);
    };

  const handleInputNumberChange = e => {
    const {value } = e.currentTarget;
    setNumber( value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});
    setName('');
    setNumber('')
  };

  
   
    return (
      <form className={s.form} action="submit" onSubmit={handleSubmit}>
        <label className={s.form__label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputNameChange}
          />
        </label>
        <label className={s.form__label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputNumberChange}
          />
        </label>
        <button className={s.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

