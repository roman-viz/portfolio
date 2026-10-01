/* eslint-disable react/jsx-no-target-blank */
import './contact.scss';
import Heading from '../../components/Heading/Heading';
import sprites from '../../icons/icons.svg';
import ButtonPrim from '../../components/ButtonPrim/ButtonPrim';
import { Helmet } from "react-helmet-async";
import Loader from '../../components/Loader/Loader';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Message from '../../components/Message/Message';

function Contact() {

    const [inputError, setInputError] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [sending, setSending] = useState(false);
    const form = useRef();
    const [formInputs, setFormInputs] = useState({
        name: '',
        message: '',
    })

    const handleInputsChange = (e) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!formInputs.name.trim().length || !formInputs.message.trim().length) {
            setMailSent(false);
            setInputError(true);
            setTimeout(() => {
                setInputError(false);
            }, 3000)
            return
        }
        if (inputError) {
            setInputError(false)
        }
        setMailSent(false);
        setMailError(false);
        setSending(true);

        try {
            await emailjs.sendForm('service_icldehq', 'template_ta52gji', form.current, 'AO0qs3gxnTGtzQks4');
            setMailSent(true);
            setFormInputs({
                name: '',
                message: '',
            });
            setTimeout(() => setMailSent(false), 3000);
        } catch (error) {
            setMailError(true);
            setTimeout(() => setMailError(false), 3000);
        } finally {
            setSending(false);
        }
    };

    const [loadingDone, setLoadingDone] = useState(false);

    useEffect(() => {
        setLoadingDone(true)
    }, [])

    return (
        <div className={loadingDone ? 'contact done' : 'contact'}>
            <Message trigger={mailSent}>Message sent!</Message>
            <Message color="red" trigger={mailError}>Error sending message!</Message>
            <Message color="red" trigger={inputError}>Fill all the fields!</Message>
            <Loader />
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Heading parVal={[0, 0]} heading="Get in" hspan="touch" span="contact" />
            <div className="content">
                <div className="info">
                    <h3>DON'T BE SHY!</h3>
                    <p>Feel free to get in touch with me. I am always
                        open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="item">
                        <a href="mailto:ron.viz.dev@gmail.com">
                            <svg>
                                <use href={sprites + '#mail'} />
                            </svg>
                        </a>
                        <div className="desc">
                            <h4>Mail me</h4>
                            <a href="mailto:ron.viz.dev@gmail.com">ron.viz.dev@gmail.com</a>
                        </div>
                    </div>
                    <div className="item">
                        <a href="tel:+380976889429">
                            <svg>
                                <use href={sprites + '#phone'} />
                            </svg>
                        </a>
                        <div className="desc">
                            <h4>Call me</h4>
                            <a href="tel:+380976889429">+380976889429</a>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://t.me/starsetphenomenon" target="_blank">
                            <svg>
                                <use href={sprites + '#telegram'} />
                            </svg>
                        </a>

                        <a href="https://github.com/roman-viz" target="_blank">
                            <svg>
                                <use href={sprites + '#github'} />
                            </svg>
                        </a>
                    </div>
                </div>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <input onChange={handleInputsChange} value={formInputs.name} type="text" name="name" id="name" placeholder='Your name' />
                    <textarea onChange={handleInputsChange} value={formInputs.message} placeholder='Your message...' name="message" id="message" cols="30" rows="10"></textarea>
                    <ButtonPrim text={sending ? 'Sending...' : 'Send message'} disabled={sending} aria-busy={sending}>
                        {sending ? (
                            <span className="button-spinner" aria-hidden="true" />
                        ) : (
                            <svg>
                                <use href={sprites + '#send'} />
                            </svg>
                        )}
                    </ButtonPrim>

                </form>
            </div>

        </div>
    )
}

export default Contact;
