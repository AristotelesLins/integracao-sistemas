'use client'; // Avisa ao Next.js que este componente roda no navegador e tem interatividade

export default function BotaoAtualizar() {
  return (
    <button
      // Classes puras do Tailwind CSS
      className="mt-6 rounded bg-blue-600 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700"
      onClick={() => window.location.reload()}
    >
      Atualizar Integrações
    </button>
  );
}