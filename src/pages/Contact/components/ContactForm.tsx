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
  <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
    <div className='flex-between gap-4 w-full'>
      <input
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='name'
        className='input-contact w-1/2'
        type='text'
      />
      <input
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='email'
        className='input-contact w-1/2'
        type='email'
      />
    </div>

    <input
      name='subject'
      value={formData.subject}
      onChange={handleChange}
      placeholder='subject'
      className='input-contact'
      type='text'
    />
    <textarea
      name='message'
      value={formData.message}
      onChange={handleChange}
      placeholder='message'
      className='input-contact'
    />

    <button type='submit' className='button-default button-active'>
      submit
    </button>
  </form>
);

export default ContactForm;
