import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// TODO: find a different method to submit contact info

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = "mailto:anhtran18202@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})"
  };

  return (
    <section id="contact"
      className="relative flex flex-col md:flex-row
      h-screen max-w-7xl px-10 mx-auto
      justify-evenly items-center
      text-center md:text-left
      snap-start"
    >
      <h3 className="absolute top-24 uppercase text-gray-400 text-2xl font-mono tracking-[20px]"
      >
        Contact
      </h3>
      
      <div className="space-y-10">
        <h4 className="text-4xl text-center">
          let's talk!
        </h4>

        <div className="space-y-5">
          <div className="flex justify-center items-center space-x-5">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <div className="relative group">
              <p className="relative font-mono text-2xl text-white z-10">
                anhtran18202@gmail.com
              </p>
              <div className="highlighter"></div>
            </div>
          </div>
        </div>

        <form onSubmit={ handleSubmit(onSubmit) }
          className="flex flex-col w-fit space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input { ...register("name") }
              placeholder="Name" className="contact-input" type="text" 
            />
            <input { ...register("email") }
              placeholder="Email" className="contact-input" type="email"
            />
          </div>
          
          <input { ...register("subject") }
            placeholder="Subject" className="contact-input" type="text"
          />
          <textarea { ...register("message") }
            placeholder="Message" className="contact-input" 
          />
          <button className="hero-button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}
