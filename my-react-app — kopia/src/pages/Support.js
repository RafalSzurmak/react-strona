import React, { useState } from 'react';

function Support() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page">
        <h1>Support</h1>
        <p>Your message has been sent. We will get back to you shortly.</p>
        <button onClick={() => setSubmitted(false)}>Send Another Message</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Support</h1>
      <p>If you have any questions, please fill out the form below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Message:
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Support;
