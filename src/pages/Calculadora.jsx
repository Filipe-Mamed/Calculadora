import { useState } from "react";
import Buttons from "../components/Buttons";
import Display from "../components/Display";

function Calculadora() {
  const [expressao, setExpressao] = useState(""); // Armazena a expressão matemática atual
  const [resultado, setResultado] = useState(null); // Armazena o resultado do cálculo
  const [historico, setHistorico] = useState(""); // Armazena a expressão após o cálculo
  const [modoResultado, setModoResultado] = useState(false); // Controla se está mostrando um resultado

   // Função para iniciar uma nova conta
  const iniciarNovaConta = (novoValor) => {
    setExpressao(novoValor); // Define a nova expressão
    setResultado(null); // Limpa o resultado
    setHistorico(""); // Limpa o histórico
    setModoResultado(false); // Desativa o modo resultado
  };

  // Função chamada quando um número é clicado
  const handleNumberClick = (number) => {
    if (modoResultado) {
      // Se estiver mostrando um resultado, inicia nova conta
      iniciarNovaConta(number.toString());
    } else {
      // Se não, adiciona o número à expressão atual
      setExpressao((prev) => prev + number);
    }
  };

  // Função chamada quando um operador é clicado
  const handleOperatorClick = (operator) => {
    if (modoResultado) {
      // Se estiver mostrando um resultado, usa ele como início da nova expressão
      iniciarNovaConta(resultado + operator);
    } else if (expressao !== "") {
      // Se houver uma expressão, adiciona o operador a ela
      setExpressao((prev) => prev + operator);
    }
  };

  // Função para calcular o resultado
  const handleCalculateClick = () => {
    try {
      const res = eval(expressao); // Calcula o resultado da expressão
      setResultado(res.toString()); // Armazena o resultado
      setHistorico(`${expressao}=`); // Salva a expressão no histórico
      setModoResultado(true); // Ativa o modo resultado
    } catch (error) {
      setResultado("Erro"); // Em caso de erro na expressão
    }
  };

  // Função para apagar o último caractere
  const handleBackspaceClick = () => {
    if (!modoResultado) {
      // Remove último caractere da expressão
      setExpressao((prev) => prev.slice(0, -1));
    }
    else if (modoResultado) {
      // Se estiver em modo resultado, limpa tudo
      setResultado(null);
      setHistorico("");
      setModoResultado(false);
    }
  };

  // Função para limpar tudo
  const handleClearClick = () => {
    setExpressao(""); // Limpa a expressão
    setResultado(null); // Limpa o resultado
    setHistorico(""); // Limpa o histórico
    setModoResultado(false); // Desativa modo resultado
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark"
      style={{ height: "100vh" }}
    >
      <div className="card shadow-lg rounded p-4" style={{ width: "400px",  background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
        <div className="card-body">
           {/* Componente dos botões com suas funções */}
          <Display expressao={historico || expressao} resultado={modoResultado ? resultado : null} />
           {/* Componente dos botões com suas funções */}
          <Buttons
            onNumberClick={handleNumberClick}
            onOperatorClick={handleOperatorClick}
            onCalculateClick={handleCalculateClick}
            onClearClick={handleClearClick}
            onBackspaceClick={handleBackspaceClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
