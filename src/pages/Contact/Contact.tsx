import React, { useState } from 'react';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    window.location.href = `mailto:anhtran18202@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Hi, my name is ${encodeURIComponent(name)}. ${encodeURIComponent(
      message
    )} (${encodeURIComponent(email)})`;
  };

  return (
    <section className='h-full flex justify-center items-center'>
      <div className='container w-fit flex flex-col justify-center items-center gap-10'>
        <ContactInfo />
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default Contact;
