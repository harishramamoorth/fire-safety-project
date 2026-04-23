import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaSpinner, FaUpload } from 'react-icons/fa';
import enquiryService from '../../services/enquiryService';
import './QuoteForm.css';

const schema = yup.object({
  companyName: yup.string().required('Company name is required'),
  fullName: yup.string().required('Full name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  phone: yup.string().required('Phone number is required'),
  projectType: yup.string().required('Please select project type'),
  projectDetails: yup.string().required('Project details are required'),
  budget: yup.string(),
  timeline: yup.string()
});

const QuoteForm = () => {
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
        ...data,
        type: 'quote_request'
      });
      
      setSubmitStatus({ type: 'success', message: 'Quote request submitted! Our team will contact you within 24 hours.' });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group">
          <input type="text" placeholder="Company Name *" {...register('companyName')} />
          {errors.companyName && <span className="error-message">{errors.companyName.message}</span>}
        </div>
        <div className="form-group">
          <input type="text" placeholder="Full Name *" {...register('fullName')} />
          {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input type="email" placeholder="Email Address *" {...register('email')} />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone Number *" {...register('phone')} />
          {errors.phone && <span className="error-message">{errors.phone.message}</span>}
        </div>
      </div>

      <div className="form-group">
        <select {...register('projectType')}>
          <option value="">Select Project Type *</option>
          <option value="commercial">Commercial Building</option>
          <option value="industrial">Industrial Facility</option>
          <option value="oil-gas">Oil & Gas</option>
          <option value="healthcare">Healthcare</option>
          <option value="warehouse">Warehouse/Storage</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && <span className="error-message">{errors.projectType.message}</span>}
      </div>

      <div className="form-group">
        <textarea rows="4" placeholder="Project Details *" {...register('projectDetails')}></textarea>
        {errors.projectDetails && <span className="error-message">{errors.projectDetails.message}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <input type="text" placeholder="Budget Range" {...register('budget')} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Timeline" {...register('timeline')} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting ? <><FaSpinner className="spinner" /> Submitting...</> : 'Request Quote'}
      </button>

      {submitStatus && (
        <div className={`submit-status ${submitStatus.type}`}>
          {submitStatus.message}
        </div>
      )}
    </form>
  );
};

export default QuoteForm;