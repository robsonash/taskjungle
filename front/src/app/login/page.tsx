"use client";

import InputLabel from "@/components/InputLabel";
import SubmitButton from "@/components/SubmitButton";
import api from "../lib/axiosConfig";
import { FormEvent, useContext, useState } from "react";
import LinkButton from "@/components/LinkButton";
import AuthContext from "../context/AuthContext";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

function AlertMessage({ message }: { message: string }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  );
}

export default function LoginPage() {
  const [messageError, setMessageError] = useState<string | null>(null);
  const { setToken } = useContext(AuthContext);
  const router = useRouter();
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const formDataObj: Record<string, any> = {};

    // Converte o FormData em um objeto
    form.forEach((value, key) => {
      formDataObj[key] = value;
    });

    try {
      const response = await api.post("/auth/login", formDataObj);
      const { access_token } = response.data;
      document.cookie = `token=${access_token}; path=/; Secure; SameSite=Lax`;
      setToken(access_token);

      formElement.reset();
      router.push("/tasks");
    } catch (error) {
      let msgErr = "Erro ao tentar fazer login. Tente novamente.";

      if (error instanceof AxiosError) {
        if (error?.response?.data?.message[0]) {
          msgErr = error?.response?.data?.message.join(", ");
        }
      }
      setMessageError(msgErr);
    }
  }

  return (
    <main className="container mx-auto">
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        Login
      </h1>
      {messageError ? <AlertMessage message={messageError} /> : null}

      <form onSubmit={login}>
        <InputLabel label="Email" type="text" name="email" />
        <InputLabel label="Password" type="text" name="password" />
        <SubmitButton label="Logar" />
      </form>

      <LinkButton label="Voltar para a tela principal" href="/" />
    </main>
  );
}
