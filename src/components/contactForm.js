import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const ContactForm = (props) => {

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
            document.querySelector('.help').style.visibility = "hidden";
            document.querySelector('span.icon:nth-child(3)').style.visibility = "hidden";
        }
    }, [form['email']]);

    let handleChange = (e) => {
        const { target } = e;



        setForm(prev => {
            return { ...prev, [target.dataset.name]: target.value }
        });

        console.log(document.activeElement);     
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        (!!form['name'] && validateEmail(form['email']) && !!form['objet'] && !!form['message'] && !!form['acceptance']) ? console.log('Sending the form to the backend', form) : console.log('There is missing info');
    }

    let validateEmail = (email) => {
        const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;


        return re.test(String(email).toLowerCase());
    }

    return props.lang === "en" ? <div className="contact">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" data-name="name" onChange={handleChange}/>
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" data-name="email" required onChange={handleChange}/>
                <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
                </span>
                <span className="icon is-small is-right" style={{ color: "red" }}>
                <i className="fa fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
            <label className="label">Subject</label>
            <div className="control">
                <div className="select">
                <select data-name="objet" onChange={handleChange}>
                    <option>We want to offer you a position !</option>
                    <option>I just want to test this functionality</option>
                </select>
                </div>
            </div>
        </div>
        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea" data-name="message" onChange={handleChange}></textarea>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="checkbox">
                    <input type="checkbox" data-name="acceptance" onClick={() => {
                        setForm((prev) => {
                            return {
                                ...prev,
                                acceptance: !prev['acceptance']
                            }
                        });
                    }} />
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={handleSubmit}>Submit</button>
            </div>
            <div className="control">
                <button className="button is-link is-light"><Link to="/">Cancel</Link></button>
            </div>
        </div>
    </div> : <div className="contact">
        <div className="field">
            <label className="label">Votre nom</label>
            <div className="control" name="name">
                <input className="input" type="text" placeholder="Insérez votre nom" onChange={handleChange} data-name="name" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="votre adresse email" onChange={handleChange} data-name="email"/>
                <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
                </span>
                <span className="icon is-small is-right" style={{ color: "red" }}>
                <i className="fa fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">Le format de cet email est incorrect</p>
        </div>
        <div className="field">
            <label className="label">Objet</label>
            <div className="control">
                <div className="select">
                <select data-name="objet" onChange={handleChange}>
                    <option>Je veux vous contacter pour du travail</option>
                    <option>C'est juste pour tester la fonctionnalité</option>
                </select>
                </div>
            </div>
        </div>
        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Votre message" data-name="message" onChange={handleChange}></textarea>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="checkbox">
                    <input type="checkbox" data-name="acceptance" onClick={() => {
                        setForm((prev) => {
                            return {
                                ...prev,
                                acceptance: !prev['acceptance']
                            }
                        });
                        }} />
                    &nbsp;J'ai lu et j'accepte les <a href="#">conditions d'utilisation</a>                        
                </label>
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={handleSubmit}>Envoyer</button>
            </div>
            <div className="control">
                <button className="button is-link is-light"><Link to="/">Annuler</Link></button>
            </div>
        </div>
    </div>
}

export default ContactForm;