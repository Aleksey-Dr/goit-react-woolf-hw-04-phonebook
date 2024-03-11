import ContactListItem from 'components/ContactList/ContactListItem';

import css from './ContactList.module.scss';

const ContactList = ({ onDelete, contacts }) => {
    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                return (
                    <ContactListItem onDeleteContact={onDelete} key={contact.id} contact={contact} />
                );
            })}
        </ul>
    );
};

export default ContactList;
