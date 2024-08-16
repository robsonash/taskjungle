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
    <main>
      <h1>Task Jungle</h1>
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
