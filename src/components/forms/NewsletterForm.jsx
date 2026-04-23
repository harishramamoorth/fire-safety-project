import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import newsletterService from '../../services/newsletterService';
import './NewsletterForm.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }
    
    setLoading(true);
    setStatus(null);
    
    try {
      await newsletterService.subscribe(email);
      setStatus({ type: 'success', message: 'Successfully subscribed!' });
      setEmail('');
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Subscription failed' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="newsletter-input-group">
        <FaEnvelope className="input-icon" />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spinner" /> : <FaPaperPlane />}
        </button>
      </div>
      {status && <div className={`newsletter-status ${status.type}`}>{status.message}</div>}
    </form>
  );
};

export default NewsletterForm;