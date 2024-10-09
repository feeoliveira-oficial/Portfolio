import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com'; 

function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,  
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
            (result) => {
                setStatus(t('MessageSentSuccess'));
                setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
                console.error('Error to send the email:', error);
                setStatus(t('MessageSentFailure'));
            }
        );
    };

    return (
        <div className="contact-form-container">
            <h2>{t('Contact')}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t('Name')}:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">{t('Message')}:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{t('Send')}</button>
            </form>

            {status && <p className="status-message">{status}</p>}
        </div>
    );
}

export default Contact;


