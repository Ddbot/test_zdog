import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import NameField from './NameField';
import EmailField from './EmailField';
import SubjectField from './SubjectField';
import MessageField from './MessageField';
import AcceptanceField from './AcceptanceField';
import SubmitBtn from './SubmitBtn';
import ErrorMessage from '../../../ErrorMessage';

const ContactForm = (props) => {

    let nameRef = useRef();
    let [error, setError] = useState({
        name: false,
        email: false,
        objet: false,
        message: false,
        acceptance: false
    });

    let [form, setForm] = useState({
        name: '',
        email: '',
        objet: '',
        message: '',
        // acceptance: false
    });

    let [checked, setChecked] = useState(false);

    let handleClick = (e) => {
        let { target } = e;
        e.preventDefault();

        setChecked(prev => !prev);
        // setForm((prev) => {
        //     return {
        //         ...prev,
        //         acceptance: !prev.acceptance
        //     }
        // });

        // setError((prevError) => {
        //     return {
        //         ...prevError,
        //         acceptance: !prevError.acceptance
        //     }
        // })
    }

    let handleChange = (e) => {
        const { target } = e;

        if (validateField(target.name) === false) {
            document.querySelector(`[name="${target.name}"]`).classList.add('is-danger');
            setError((prevError) => {
                return {
                    ...prevError,
                    [target.name]: true
                }
            })
        } else {
            document.querySelector(`[name="${target.name}"]`).classList.remove('is-danger');
            setError((prevError) => {
                return {
                    ...prevError,
                    [target.name]: false
                }
            })
        }

        setForm(prev => {
            return {
                ...prev,
                [target.name]: target.value.trim()
            };
        });

        // target.name === "email" && validateField(target.name);

        console.log(target, form[target.name], target.name);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let res = [];

        // si il y a le moindre attribut dans error, ne pas submit

        let processError = (key) => {
            document.querySelector(`[name="${key}"]`).classList.add('is-danger');
            setError((prevError) => { 
                return {
                    ...prevError,
                    [key]: true
                }
            });
        }


        Array.from(Object.keys(form)).forEach((key) => {
            if (!validateField(key)) { processError(key) } else {
                document.querySelector(`[name="${key}"]`).classList.remove('is-danger');

                // key === 'acceptance' ? document.querySelector(`[name="${key}"]`).classList.remove('is-danger');
            };
            res.push(!validateField(key));
        });

        
        // let ar = Array.from(Object.values(error)
        //     .map(v => !!v));

        const isTrue = (v) => v === true
        // ar.some(isFalse);
        console.log(res.some(isTrue) ? 'Donnez ls renseignements demandés svp': "Youpo ! pas derreur on passe a la suite");

        // console.log('Errors ', error, ' State: ', form);
        
        // (!!form['name'] && validateEmail(form['email']) && !!form['objet'] && !!form['message'] && !!form['acceptance']) ? console.log('Sending the form to the backend', form) : console.log('There is missing info');
    }

    // let validateEmail = (email) => {
    //     const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
    //     return re.test(String(email).toLowerCase());
    // }

    let validateField = (fieldName) => {
        switch (fieldName) {
            // case 'name':
            //     return form[fieldName].length > 0 ? true : false;
            case 'email':
                const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
                return re.test(String(form.email).toLowerCase());
            // case 'acceptance':
            //     return form[fieldName] ? true : false;
            // case 'message':
            //     return form[fieldName].length > 0 ? true : false;
            default:
                return !!form[fieldName] ? true : false;
        }          
    }

    return <form name="contactForm" className="contact">
            <NameField onChange={handleChange} error={error.name} lang={props.lang} />
            <EmailField onChange={handleChange}  error={error.email} lang={props.lang} />
            <SubjectField onChange={handleChange} lang={props.lang} />
            <MessageField onChange={handleChange} lang={props.lang} />
            <AcceptanceField onClick={handleClick} error={error.acceptance} lang={props.lang} checked={checked}/>
            <SubmitBtn handleSubmit={handleSubmit}  error={error} lang={props.lang} />
        </form>
    }

export default ContactForm;