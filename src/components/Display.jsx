function Display({ expressao, resultado }) {
  
  // Função para formatar números
  const formatarNumero = (numero) => {
    if (isNaN(numero)) return numero; // Se não for número, retorna como está
    if (numero.toString().includes(".")) return numero; // Se for decimal, retorna como está
    // Formata o número no padrão brasileiro
    return new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 20,
    }).format(numero);
  };

   // Função para formatar a expressão matemática
   const formatarExpressao = (expressao) => {
    return expressao
      .replace(/\*/g, "×") // Substitui * por ×
      .replace(/\//g, "÷") // Substitui / por ÷
      .split(/([+\-×÷()])/) // Separa operadores
      .map((part) => {
        if (part === "") return ""; // Remove partes vazias
        // Formata números mantendo operadores
        return isNaN(part) ? part : formatarNumero(part);
      })
      .join(""); // Junta tudo novamente
  };

  return (
    <div className="card mb-4">
      <div className="card-body text-end bg-light py-4">
        <div className="fs-4 text-muted mb-2">
           {/* Mostra a expressão formatada */}
          {expressao ? formatarExpressao(expressao) : ""}
        </div>
        <div className="fs-2 fw-bold">
          {/* Mostra o resultado formatado */}
          {resultado !== null ? formatarNumero(resultado) : ""}
        </div>
      </div>
    </div>
  );
}

export default Display;
