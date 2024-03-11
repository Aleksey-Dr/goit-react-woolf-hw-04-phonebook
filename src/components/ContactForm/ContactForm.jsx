import { useState } from 'react';

import css from './ContactForm.module.scss';

const ContactForm = ({ onSubmit }) => {

    // ================== STATE
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // ================== /STATE

    // ================== LOGIC
    const handleInput = evt => {
        const { name, value } = evt.target;

        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        onSubmit(name, number);

        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };
    // ================== /LOGIC

    // const { name, number } = inputs;

    return (
        <div className={css['form-wrapper']}>
            <form
                onSubmit={handleSubmit}
                name="contact-form"
                className={css.form}
            >
                <div className={css['form-label-wrapper']}>
                    <input
                        onChange={handleInput}
                        value={name}
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder=" "
                        className={css['form-input']}
                    />
                    <label htmlFor="name" className={css['form-label']}>
                        Name
                    </label>
                </div>
                <div className={css['form-label-wrapper']}>
                    <input
                        onChange={handleInput}
                        value={number}
                        id="phone"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder=" "
                        className={css['form-input']}
                    />
                    <label htmlFor="phone" className={css['form-label']}>
                        Number
                    </label>
                </div>
                <button type="submit" className={css['form-button']}>
                    Add contact
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
