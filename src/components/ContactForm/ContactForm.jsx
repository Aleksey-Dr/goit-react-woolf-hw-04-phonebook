import { Component } from 'react';

import css from './ContactForm.module.scss';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    // ================== LOGIC
    handlerInput = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        const { name, number } = this.state;
        this.props.onSubmit(name, number);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };
    // ================== /LOGIC

    render() {
        const { name, number } = this.state;

        return (
            <div className={css['form-wrapper']}>
                <form
                    onSubmit={this.handleSubmit}
                    name="contact-form"
                    className={css.form}
                >
                    <div className={css['form-label-wrapper']}>
                        <input
                            onChange={this.handlerInput}
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
                            onChange={this.handlerInput}
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
    }
}

export default ContactForm;
