// Importing React and useState from 'react' for state management
import React, { useState } from 'react';
// Importing custom styles for the Form component
import './Components.css';

// Functional component for the contact form
function Form() {
    // Using useState hook to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handling input changes and updating state accordingly
    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        // Limiting subject input to 15 characters
        if (name === 'subject') {
            value = value.substring(0, 15);
        }

        // Updating form data state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handling form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Validating form data
        if (!formData.name || !formData.email) {
            alert('Fill out your name and email address please!');
        } else if (!formData.message) {
            alert(`Please enter a message`);
        } else {
            alert(`Thank you for your contact ${formData.name}. I'll respond to you as soon as I can.`);
        }

        // Resetting form data state
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    // JSX structure for the form component
    return (
        <div>
            <form className="form p-5">

                <h3 className="mb-5"> To contact me, please complete the form below and I will respond to you as soon as I can
                </h3>

                {/* Input fields for name, email, subject, and message */}
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    className='p-2 my-3 input w-100'
                    value={formData.subject}
                    name="subject"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Subject"
                />
                <input
                    className='p-2 my-3 py-5 input w-100'
                    value={formData.message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                {/* Button for form submission */}
                <button onClick={handleFormSubmit} className='p-3 submitBtn w-100'>Submit</button>
            </form>
        </div>
    );
}

// Exporting the Form component
export default Form;
