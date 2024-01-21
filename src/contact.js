import React from 'react';
import './contact.css';
function Contact(props) {
    return (
        <div>
        <br></br>
            <div className="container">
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="Emaild">Email</label>
                    <input type="text" id="Email" name="email" placeholder="Your email-id.." />
            
                    <label htmlFor="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
