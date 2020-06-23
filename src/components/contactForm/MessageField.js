import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';

const MessageField = (props) => {
        const { lang } = props;
        return <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                                <textarea className="textarea" placeholder={lang === 'en' ? 'Tell me everything' : 'Dites-moi tout...' } data-name="message" onChange={props.handleChange}></textarea>
                        </div>
                </div>
}
export default MessageField;

