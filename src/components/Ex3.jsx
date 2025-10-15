// Ex3 — Grid simples

// Crie um `grid` com 2 colunas e 2 linhas, cada célula com fundo cinza claro e altura fixa de `80px`.

export default function Ex3() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex3 - Grid Simples</h1>

      {<div className="grid grid-cols-2 grid-rows-2 h-20 gap-4">

      <div className="bg-gray-200 h-20">C1 </div>
      <div className="bg-gray-200 h-20">C2 </div>
      <div className="bg-gray-200 h-20">L1 </div>
      <div className="bg-gray-200 h-20">L2 </div>
      </div>}
    </div>
  );
}


