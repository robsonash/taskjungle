"use client";

import LinkButton from "@/components/LinkButton";

export default function TasksPage() {

  return (
    <main className="container mx-auto">
      <h1 className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        tasks
      </h1>
      <LinkButton label="Voltar para a tela principal" href="/" />
    </main>
  );
}
