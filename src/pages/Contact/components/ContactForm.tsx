import React from 'react';
import { FormData } from '../Contact';

interface FormProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<FormProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => (
  <form
    onSubmit={handleSubmit}
    className='mx-auto max-w-6xl flex flex-col gap-5'>
    <span className='flex gap-5'>
      <input
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='name'
        className='contact-input'
        type='text'
      />
      <input
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='email'
        className='contact-input'
        type='email'
      />
    </span>

    <input
      name='subject'
      value={formData.subject}
      onChange={handleChange}
      placeholder='subject'
      className='contact-input'
      type='text'
    />
    <textarea
      name='message'
      value={formData.message}
      onChange={handleChange}
      placeholder='message'
      className='contact-input'
    />

    <button type='submit' className='button-page bg-accent-pink text-primary'>
      submit
    </button>
  </form>
);

export default ContactForm;
