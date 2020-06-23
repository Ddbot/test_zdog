import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import NameField from './NameField';
import EmailField from './EmailField';
import SubjectField from './SubjectField';
import MessageField from './MessageField';
import AcceptanceField from './AcceptanceField';
import SubmitBtn from './SubmitBtn';
import ErrorMessage from '../ErrorMessage';

const ContactForm = (props) => {

    let nameRef = useRef();
    let [error, setError] = useState({
        name: false,
        email: false,
        message: false,
        acceptance: false
    });

    let [form, setForm] = useState({
        name: '',
        email: '',
        objet: '',
        message: '',
        acceptance: false
    });




    // Email validation
    useEffect(() => { 
        if (form['email'].length > 0 && !validateEmail(form['email'])) {
            document.querySelector('.has-icons-left>input').classList.add('is-danger');
            document.querySelector('span.icon:nth-child(3)').style.visibility = "visible";
            document.querySelector('.help').style.visibility = "visible";
        } else {
            document.querySelector('.has-icons-left>input').classList.remove('is-danger');
            // document.querySelector('.help').style.visibility = "hidden";
            document.querySelector('span.icon:nth-child(3)').style.visibility = "hidden";
        }
    }, [form['email']]);

    let handleChange = (e) => {
        const { target } = e;

        setForm(prev => {
            return target.dataset.name === "objet" ? { ...prev, [target.dataset.name]: target.value.trim() } : { ...prev, [target.dataset.name]: target.value };
        });
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        const userName = document.contactForm.userName.value;
        if (!userName) {
            setError((prevError) => {
                return { ...prevError, name: true }
            });
        if (!validateEmail(form.email)) {
            setError((prevError) => {
                return { ...prevError, email: true }
            });            
            }
        }

        if (form.acceptance === false) {
           setError((prevError) => {
                return { ...prevError, acceptance: true }
            });         }
        
        (!!form['name'] && validateEmail(form['email']) && !!form['objet'] && !!form['message'] && !!form['acceptance']) ? console.log('Sending the form to the backend', form) : console.log('There is missing info');
    }

    let validateEmail = (email) => {
        const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        return re.test(String(email).toLowerCase());
    }

    return <form name="contactForm" className="contact">
            <NameField onChange={handleChange} error={error.name} lang={props.lang} />
            <EmailField onChange={handleChange}  error={error.email} lang={props.lang} />
            <SubjectField onChange={handleChange} lang={props.lang} />
            <MessageField onChange={handleChange} lang={props.lang} />
            <AcceptanceField onClick={() => setForm((prev) => {return {...prev, acceptance: !prev.acceptance }})} error={error.acceptance} lang={props.lang} />
            <SubmitBtn handleSubmit={handleSubmit}  error={error} lang={props.lang} />
        </form>
    }

export default ContactForm;