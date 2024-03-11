import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import css from './App.module.scss';

export const App = () => {
    // ================== STATE
    const [contacts, setContacts] = useState(() => {
        return (
            JSON.parse(window.localStorage.getItem('contacts')) ?? [
                { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            ]
        );
    });
    const [filter, setFilter] = useState('');
    // ================== /STATE

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    // ================== LOGIC
    const addContact = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        const includesName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        includesName
            ? Notify.warning(name + ' is already in contacts')
            : setContacts([contact, ...contacts]);
    };

    const deleteContact = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    const handlerFilter = evt => setFilter(evt.currentTarget.value);
    // ================== /LOGIC

    // ==================== FILTER
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
    // ==================== /FILTER

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <h2 className={css.title}>Contacts</h2>
            <Filter onFilter={handlerFilter} />
            <ContactList onDelete={deleteContact} contacts={filterContacts} />
        </div>
    );
};
