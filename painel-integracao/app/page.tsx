import { Suspense } from 'react';
import BotaoAtualizar from './BotaoAtualizar'; // Importando seu componente limpo

interface Integracao {
  id: string;
  sistemaOrigem: string;
  sistemaDestino: string;
  status: string;
}

async function ListaIntegracoes() {
  const resposta = await fetch('http://localhost:3001/integracoes', {
    cache: 'no-store',
  });

  if (!resposta.ok) {
    throw new Error(`A API respondeu com status ${resposta.status}`);
  }

  const integracoes: Integracao[] = await resposta.json();

  if (integracoes.length === 0) {
    return <p>Nenhuma integração cadastrada.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {integracoes.map((item) => (
        <div key={item.id} className="rounded border p-4 shadow-md">
          <p>
            <strong>Origem:</strong> {item.sistemaOrigem}
          </p>
          <p>
            <strong>Destino:</strong> {item.sistemaDestino}
          </p>
          <p>
            <strong>Status:</strong> {item.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Painel de Integrações
      </h1>

      <Suspense fallback={<p>Carregando integrações...</p>}>
        <ListaIntegracoes />
      </Suspense>

      {/* Renderizando o botão */}
      <BotaoAtualizar />
    </main>
  );
}