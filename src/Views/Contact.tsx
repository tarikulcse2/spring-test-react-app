import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { IContact } from '../Models/Contact';
import { Link } from 'react-router-dom';
import { contactService } from '../service/contact-service';

export const Contact = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contacts, setContacts] = useState<IContact[]>([{ id: 1, name: 'tarikul', mobile: '0595650' }]);
    const [buttonText, setButtonText] = useState('Save');

    useEffect(() => {
        contactService.getAll().then(res => {
            setContacts(res.data.result || []);
        })
    }, []);

    const changeContactForm = (con: IContact) => {
        if (buttonText == 'Save') {
            setContacts([con, ...contacts])
        } else {
            const index = contacts.findIndex(s => s.id === Number(con.id));
            const contactList = contacts;
            contactList[index] = con;
            setContacts([...contactList])
            setButtonText('Save')
        }
        setContact({} as IContact)
    }

    const edit = (con: IContact) => {
        setButtonText('Update')
        setContact(con)
    }

    const remove = (id: number) => {
        if (window.confirm('do you want to delete contact?')) {
            contactService.delete(id).then(res => {
                if (res.data.status) {
                    let cons = contacts.filter(t => t.id != id)
                    setContacts([...cons])
                }
            })
        }
    }

    const editContact = (con: IContact) => (
        <button type="button" onClick={() => edit(con)} className="btn btn-link">Edit</button>
    );

    const deleteContact = (id: number) => (
        <button type="button" onClick={() => remove(id)} className="btn btn-link">Delete</button>
    );

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm contact={contact} changeContact={changeContactForm} buttonTitle={buttonText} />
                    </div>

                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((c: IContact) => (
                                    <tr key={c.id}>
                                        <td>{c.name} </td>
                                        <td><Link className="nav-link" to={`contact-details/${c.mobile}`}>{c.mobile}</Link></td>
                                        <td>
                                            {editContact(c)}
                                            {deleteContact(c.id)}
                                        </td>
                                    </tr>
                                ))};

                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}



