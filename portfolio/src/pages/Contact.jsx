import ReactDOM from 'react-dom'
import React, { useState } from 'react';

import Form from '../component/Form';
import ContactIcons from '../component/ContactIcons';

import './PageStyles.css'

function Contact() {
    return <div className='background min-vh-100 pb-5'>
        <Form></Form>
        <ContactIcons></ContactIcons>
    </div>
}
export default Contact