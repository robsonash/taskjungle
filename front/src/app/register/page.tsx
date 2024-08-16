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
  async function postUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const formDataObj: Record<string, any> = {};

    form.forEach((value, key) => {
      formDataObj[key] = value;
    });

    await axios.post("http://localhost:3001/users", formDataObj);
    formElement.reset();
  }

  return (
    <main>
      <h1>Register</h1>

      <form onSubmit={postUser}>
        <div>
          <label>Nome:</label>
          <input name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
