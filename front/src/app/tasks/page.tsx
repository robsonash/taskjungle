"use client";

import LinkButton from "@/components/LinkButton";
import axios from "axios";
import { useEffect, useState } from "react";

interface Task {
  _id: string;
  name: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function getTasks() {
    const response = await axios.get<Task[]>("http://localhost:3001/tasks");
    setTasks(response.data);
  }
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main className="container mx-auto">
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        Tasks
      </h1>
      <LinkButton label="Voltar para a tela principal" href="/" />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </main>
  );
}
