"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const response = await axios.get<User[]>("http://localhost:3001/users");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <main className="container mx-auto">
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Task Jungle</h1>
      <div>
        <a href="/register" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Register page</a>
        <a href="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Login page</a>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}, {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
