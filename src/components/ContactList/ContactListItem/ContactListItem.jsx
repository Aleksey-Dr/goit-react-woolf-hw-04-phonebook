import { MdDeleteForever } from "react-icons/md";

import css from './ContactListItem.module.scss';

const ContactListItem = ({ onDeleteContact, contact }) => {
    const { id, name, number } = contact;
    return (
        <li className={css['list-item']}>
            <span>{name}:</span>
            <span className={css['phone']}>{number}</span>
            <button onClick={() => onDeleteContact(id)} className={css["list-item-button"]}><MdDeleteForever size={'2em'} /></button>
        </li>
    );
};

export default ContactListItem;
