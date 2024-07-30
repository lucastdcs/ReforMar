import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  StyledForm,
  StyledInput,
  StyledArchive,
  StyledTextArea,
} from "./Form.styled";
import Button from "../Button/Button";

const Form = () => {
  const contactForm = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    files: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wzmv46', 'template_el4yyi9', contactForm.current, {
        publicKey: 'kpxzOM0J67_H5q5Fn',
    }).then(
        () => {
            console.log('SUCCESS');
            // Limpar o formulário após o envio bem-sucedido
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
              files: null,
            });
        },
        (error) => {
            console.log("FAILED", error.text);
        },
    );
  };

  return (
    <>
      <StyledForm ref={contactForm} onSubmit={sendEmail}>
        <StyledInput
          placeholder="Seu Nome"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="Seu E-mail"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <StyledTextArea
          placeholder="Qual a sua mensagem?"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <StyledArchive>
          <StyledInput
            placeholder="Anexar arquivo"
            type="file"
            name="files"
            onChange={handleChange}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4403 11.0509L12.2503 20.2409C11.1244 21.3667 9.59747 21.9992 8.00529 21.9992C6.41311 21.9992 4.88613 21.3667 3.76029 20.2409C2.63445 19.1151 2.00195 17.5881 2.00195 15.9959C2.00195 14.4037 2.63445 12.8767 3.76029 11.7509L12.9503 2.5609C13.7009 1.81033 14.7188 1.38867 15.7803 1.38867C16.8417 1.38867 17.8597 1.81033 18.6103 2.5609C19.3609 3.31146 19.7825 4.32944 19.7825 5.3909C19.7825 6.45235 19.3609 7.47033 18.6103 8.2209L9.41029 17.4109C9.03501 17.7862 8.52602 17.997 7.99529 17.997C7.46456 17.997 6.95557 17.7862 6.58029 17.4109C6.20501 17.0356 5.99418 16.5266 5.99418 15.9959C5.99418 15.4652 6.20501 14.9562 6.58029 14.5809L15.0703 6.1009"
              stroke="#F8F8F8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </StyledArchive>
        <Button type="submit" texto="Enviar" value="send"/>
      </StyledForm>
    </>
  );
};

export default Form;
