// Importing ReactDOM for potential use in the future
import ReactDOM from 'react-dom';

// Importing React and FontAwesome icons
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Functional component for displaying contact icons
function ContactIcons() {
    return (
        <div className='pb-5'>
            {/* Heading for the contact icons */}
            <h3 className="p-5">Contacts below:</h3>
            <div className="px-5 py-1 inline-block">
                <h3>
                    {/* Email icon with mailto link */}
                    <a href='mailto:mom_adjei@yahoo.com' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                    </a>

                    {/* LinkedIn icon with link */}
                    <a href='https://www.linkedin.com/in/michael-adjei-6b2898188/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                    </a>

                    {/* GitHub icon with link */}
                    <a href='https://github.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                    </a>

                    {/* Twitter icon with link */}
                    <a href='https://twitter.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>

                    {/* Instagram icon with link */}
                    <a href='https://www.instagram.com/' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                </h3>
            </div>
        </div>
    );
}

// Exporting the ContactIcons component
export default ContactIcons;
