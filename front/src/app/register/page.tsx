"use client";

import InputLabel from "@/components/InputLabel";
import SubmitButton from "@/components/SubmitButton";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

function AlertMessage({ message }: { message: string }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default function RegisterPage() {
  const [messageError, setMessageError] = useState<string | null>(null);

  async function postUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const formDataObj: Record<string, any> = {};

    form.forEach((value, key) => {
      formDataObj[key] = value;
    });

    try {
      await axios.post("http://localhost:3001/users", formDataObj);
      formElement.reset();
    } catch(error){

      let msgErr = 'Algo deu errado meu irmao'

      if(error instanceof AxiosError){
        if(error?.response?.data?.message[0]){
          msgErr = error?.response?.data?.message.join(', ')
        }
      }

      

      setMessageError(msgErr)
    }
  }

  return (
    <main className="container mx-auto">
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        Register
      </h1>

      {messageError ? <AlertMessage message={messageError} /> : <></>}

      <form onSubmit={postUser}>
        <InputLabel label="Nome" type="text" name="name" />
        <InputLabel label="Email" type="text" name="email" />
        <InputLabel label="Password" type="text" name="password" />
        <SubmitButton label="Enviar" />
      </form>
    </main>
  );
}
