// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>

        {<div className="bg-white border-1 rounded-lg mx-auto w-full max-w-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">São Paulo FC</h2>
          <p className="text-gray-700 mb-4 text-center">MAIOR DO BRASIL</p>
          <button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 ">Botão</button>
        </div>
        }
    </div>
  );
}