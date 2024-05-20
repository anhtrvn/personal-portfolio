import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      'mailto:anhtran18202@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})';
  };

  return (
    <section
      id='contact'
      className='relative mx-auto flex h-screen max-w-6xl snap-start flex-col items-center justify-evenly px-5 text-center md:flex-row md:px-10 md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-[#99d6ea] md:text-3xl'>
        Contact
      </h3>

      <div className='max-w-full space-y-10'>
        <h4 className='animate-pulse text-center text-3xl text-[#e1e7ec]'>
          let's talk!
        </h4>

        <div className='space-y-5 text-[#99d6ea]'>
          <div className='group flex items-center justify-center space-x-5'>
            <FontAwesomeIcon icon={faEnvelope} size='xl' className='group-hover:text-[#fca6d1]' />
            <div className='relative'>
              <p className='relative z-10 text-xl sm:text-2xl delay-100 hover:text-[#1b1d36]'>
                anhtran18202@gmail.com
              </p>
              <div className='highlighter'></div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto max-w-full flex flex-col space-y-2'
        >
          <span className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contact-input'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contact-input'
              type='email'
            />
          </span>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contact-input'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contact-input'
          />

          <button
            type='submit'
            className='rounded-lg bg-[#fca6d1] px-6 py-2 text-lg font-semibold tracking-widest text-[#1b1d36] transition-all hover:border-gray-400 hover:bg-[#e1e7ec] active:bg-[#99d6ea]'
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
