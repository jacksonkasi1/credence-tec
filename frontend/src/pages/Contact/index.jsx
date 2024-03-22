import React from 'react';

// images
import HeaderBg from '../../assets/images/Contact/HeaderBg.webp'

// components
import Hero from '../../components/shared/Hero';
import Team from './Team';
import ContactForm from './ContactForm';
import ConnectBanner from '../../components/shared/ConnectBanner';

const Contact = () => {
    return (
        <div>
            <Hero title={'Contact us'} content={'Home / Contact Us'} image={HeaderBg} />
            <ContactForm />
            <Team />
            <ConnectBanner />
        </div>
    );
};

export default Contact;