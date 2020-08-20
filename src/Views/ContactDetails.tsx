import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { contactService } from '../service/contact-service';
import { IContact } from '../Models/Contact';
export const ContactDetails = ({ match }: RouteComponentProps<any>) => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    useEffect(() => {
        contactService.getByMobile(match.params.mobile).then(res => {
            setContact(res.data.result || {} as IContact)
        })
    }, []);
    return (
        <>
            <div className="container">
                <h3>Name: {contact.name}</h3>
                <h4>Mobile: {contact.mobile}</h4>
            </div>
        </>
    )
}