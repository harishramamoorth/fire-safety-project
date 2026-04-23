import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import enquiryService from '../../services/enquiryService';
import './ContactForm.css';

const schema = yup.object({
  fullName: yup.string().required('Full name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  phone: yup.string().matches(/^[0-9+\-\s]+$/, 'Invalid phone number'),
  serviceType: yup.string().required('Please select a service'),
  message: yup.string().max(1000, 'Message too long')
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await enquiryService.submitEnquiry({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        service_type: data.serviceType,
        message: data.message
      });
      
      setSubmitStatus({ type: 'success', message: 'Thank you! Our team will contact you within 24 hours.' });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name *"
          {...register('fullName')}
          className={errors.fullName ? 'error' : ''}
        />
        {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address *"
          {...register('email')}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <input
          type="tel"
          placeholder="Phone Number"
          {...register('phone')}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone.message}</span>}
      </div>

      <div className="form-group">
        <select {...register('serviceType')} className={errors.serviceType ? 'error' : ''}>
          <option value="">Select Service/Product</option>
          <option value="suppression">Fire Suppression Systems</option>
          <option value="detection">Detection & Alarms</option>
          <option value="extinguishers">Fire Extinguishers</option>
          <option value="foam">Foam Concentrates</option>
          <option value="training">Safety Training</option>
          <option value="certification">Certification & Testing</option>
        </select>
        {errors.serviceType && <span className="error-message">{errors.serviceType.message}</span>}
      </div>

      <div className="form-group">
        <textarea
          rows="5"
          placeholder="Your Message / Project Details"
          {...register('message')}
          className={errors.message ? 'error' : ''}
        ></textarea>
        {errors.message && <span className="error-message">{errors.message.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? <><FaSpinner className="spinner" /> Submitting...</> : 'Submit Enquiry'}
      </button>

      {submitStatus && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;