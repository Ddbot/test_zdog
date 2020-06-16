import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const ContactForm = (props) => {
    useEffect(() => { 
        console.log('Received LANG is ', props);
    });
    return props.lang === "en" ? <div className="contact">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
        </div>
        <div className="field">
            <label className="label">Subject</label>
            <div className="control">
                <div className="select">
                <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                </select>
                </div>
            </div>
        </div>
        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={() => { console.log('YOU SUBMIT THE FORM');}}>Submit</button>
            </div>
            <div className="control">
                <button className="button is-link is-light"><Link to="/">Cancel</Link></button>
            </div>
        </div>
    </div> : <div className="contact">
        <div className="field">
            <label className="label">Votre nom</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p className="help is-danger">Le format de cet email est incorrect</p>
        </div>
        <div className="field">
            <label className="label">Objet</label>
            <div className="control">
                <div className="select">
                <select>
                    <option>Je veux juste tester la fonctionnalité</option>
                    <option>Je veux vous contacter pour du travail</option>
                </select>
                </div>
            </div>
        </div>
        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="checkbox">
                <input type="checkbox" />
                J'ai lu et accepte les <a href="#">Conditions générales d'utilisation</a>
                </label>
            </div>
        </div>
        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link" onClick={() => { console.log('YOU SUBMIT THE FORM');}}>Envoyer</button>
            </div>
            <div className="control">
                <button className="button is-link is-light"><Link to="/">Annuler</Link></button>
            </div>
        </div>
    </div>
}

export default ContactForm;