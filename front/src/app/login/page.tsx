"use client";

import axios from "axios";
import { FormEvent } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const formDataObj: Record<string, any> = {};

    // Converte o FormData em um objeto
    form.forEach((value, key) => {
      formDataObj[key] = value;
    });

    await axios.post("http://localhost:3001/auth/login", formDataObj);
    formElement.reset();
  }

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={login}>
        <div>
          <label>Email:</label>
          <input name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" required />
        </div>
        <button type="submit">Logar</button>
      </form>
    </main>
  );
}
