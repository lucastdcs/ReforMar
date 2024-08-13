import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  StyledForm,
  StyledInput,
  StyledArchive,
  StyledTextArea,
} from "./Form.styled";
import Button from "../Button/Button";
import { Text } from "../../assets/styles/typography.styled";
import EmailPopUp from "../EmailPopUp/EmailPopUp";

const Form = () => {
  const loadDriveApi = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          apiKey: 'AIzaSyAPLl9_ogmjds_G8PLuodF5-mgpz9ZSUnU',
          clientId: '436762025269-59vh6vdankf1fn9aisvnb9da7v4q9ius.apps.googleusercontent.com',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
          scope: 'https://www.googleapis.com/auth/drive.file',
        })
        .then(() => {
          window.gapi.auth2.getAuthInstance().signIn();
        })
        .catch((error) => {
          console.error('Erro ao carregar a API do Google Drive:', error);
        });
    });
  };

  useEffect(() => {
    loadDriveApi();
  }, []);

  const uploadToDrive = async (file) => {
    try {
      const accessToken = window.gapi.auth2
        .getAuthInstance()
        .currentUser.get()
        .getAuthResponse().access_token;

      const form = new FormData();
      form.append(
        'metadata',
        new Blob(
          [JSON.stringify({ name: file.name, mimeType: file.type })],
          { type: 'application/json' }
        )
      );
      form.append('file', file);

      const response = await fetch(
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',
        {
          method: 'POST',
          headers: new Headers({
            Authorization: 'Bearer ' + accessToken,
          }),
          body: form,
        }
      );

      const result = await response.json();

      if (result.id) {
        return `https://drive.google.com/file/d/${result.id}/view?usp=sharing`;
      } else {
        console.error('Erro ao obter o ID do arquivo:', result);
        return '';
      }
    } catch (error) {
      console.error('Erro ao fazer upload para o Google Drive:', error);
      return '';
    }
  };

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const contactForm = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
    files: null,
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
    user_email_invalid: false,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
      user_email_invalid: false,
    }));
  };

  const validateForm = () => {
    const { user_name, user_email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      user_name: !user_name.trim(),
      user_email: !user_email.trim(),
      message: !message.trim(),
      user_email_invalid: !emailRegex.test(user_email),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let fileLink = '';
    if (formData.files) {
      fileLink = await uploadToDrive(formData.files);
    }

    const emailParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: `${formData.message}\n\nLink para o arquivo: ${fileLink}`,
    };

    emailjs
      .send('service_i7sblbe', 'template_71w4paa', emailParams, {
        publicKey: '8OU2nCiwIjNLgLtWq',
      })
      .then(
        () => {
          console.log('SUCCESS');
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
            files: null,
          });
          togglePopUp();
        },
        (error) => {
          console.log('FAILED', error.text);
        }
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
        {errors.user_name && <Text>Por favor, preencha seu nome.</Text>}

        <StyledInput
          placeholder="Seu E-mail"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        {errors.user_email && <Text>Por favor, preencha seu e-mail.</Text>}
        {errors.user_email_invalid && (
          <Text>Por favor, insira um e-mail válido.</Text>
        )}

        <StyledTextArea
          placeholder="Qual a sua mensagem?"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <Text>Por favor, preencha sua mensagem.</Text>}

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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledArchive>
        <Button type="submit" texto="Enviar" value="send" />
      </StyledForm>
      {isPopUpOpen && <EmailPopUp onClick={togglePopUp} />}
    </>
  );
};

export default Form;
