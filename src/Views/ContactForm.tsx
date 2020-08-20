import React, { useState } from 'react';
import { IContact } from '../Models/Contact';
import { useForm } from 'react-hook-form';
import { contactService } from '../service/contact-service';
interface IProps {
    changeContact: (data: IContact) => void;
    contact: IContact
    buttonTitle?: string;
}

type FormData = {
    id: number;
    name: string;
    code: string;
    mobile: string;
};

const defaultProps: IProps = {
    contact: {} as IContact,
    buttonTitle: "Save",
    changeContact: () => { }
}

export const ContactForm = (props: IProps) => {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors, formState, reset } = useForm<FormData>({ mode: "onChange" });
    setTimeout(() => {
        setMessage('')
    }, 5000);

    const onSubmit = (con: IContact, e: any) => {
        if (props.buttonTitle == 'Save') {
            contactService.insert(con).then(res => {
                if (res.data.status)
                    props.changeContact(res.data.result);
                setMessage(res.data.message)
            })
        } else {
            contactService.update(con).then(res => {
                if (res.data.status)
                    props.changeContact(res.data.result);
                setMessage(res.data.message)
            })
        }
        //e.target.reset();
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="id" ref={register({})} defaultValue={props.contact.id} />
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" placeholder="Enter your name"
                        ref={register({ required: true })}
                        defaultValue={props.contact.name} />
                    {errors.name && "Name is require"}
                </div>
                <div className="form-group">
                    <label htmlFor="mob">Mobile Number</label>
                    <input type="tel" className="form-control" id="mob"
                        name="mobile" placeholder="i.e 01676775522"
                        ref={register({ required: true, pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/ })}
                        defaultValue={props.contact.mobile} />
                    {errors.mobile && errors.mobile.type == 'required' && "Mobile is require"
                        || errors.mobile && errors.mobile.type == 'pattern' && "Mobile is not valid"}
                </div>
                <button type="submit" className="btn btn-primary">{props.buttonTitle}</button>
            </form>
            <br />
            <p>
                {message}
            </p>
        </div>
    );
}
