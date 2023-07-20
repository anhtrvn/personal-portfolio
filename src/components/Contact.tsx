import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="flex flex-col relative h-screen text-center md:flex-row md:text-left
    max-w-7xl justify-evenly items-center px-10 mx-auto">
      <h3 className="uppercase absolute top-24 text-gray-400 text-2xl tracking-[20px]">
        Contact
      </h3>
      
      <div className="space-y-10">
        <h4 className="text-4xl text-center">
          let's talk!
        </h4>

        <div className="space-y-5">
          <div className="flex justify-center items-center space-x-5">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <p className="text-2xl text-gray-400">anhtran18202@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p className="text-2xl text-gray-400">+1 (832) 916-1508</p>
          </div>
        </div>

        <form onSubmit={ handleSubmit(onSubmit) }
          className="flex flex-col space-y-2 mx-auto w-fit"
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
    </div>
  )
}
