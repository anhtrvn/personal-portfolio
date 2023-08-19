import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      "mailto:anhtran18202@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})";
  };

  return (
    <section
      id="contact"
      className="relative mx-auto flex h-screen max-w-7xl snap-start flex-col items-center justify-evenly
      px-10 text-center md:h-[90%] md:flex-row md:text-left"
    >
      <h3
        className="absolute top-24 font-mono text-2xl uppercase tracking-[20px] text-gray-400
        md:text-3xl"
      >
        Contact
      </h3>

      <div className="space-y-10">
        <h4 className="text-center text-4xl">let's talk!</h4>

        <div className="space-y-5">
          <div className="flex animate-pulse items-center justify-center space-x-5">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <div className="group relative">
              <p className="relative z-10 font-mono text-2xl text-white">
                anhtran18202@gmail.com
              </p>
              <div className="highlighter"></div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
          />

          <button className="hero-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
