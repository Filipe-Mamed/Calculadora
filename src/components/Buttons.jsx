import { FaBackspace } from "react-icons/fa";

function Buttons({
  onNumberClick,
  onOperatorClick,
  onClearClick,
  onCalculateClick,
  onBackspaceClick,
}) {
  // Array com configuração de todos os botões
  const buttons = [
     // Cada objeto representa um botão com seu rótulo, valor e tipo
    { label: "1", value: 1, type: "number" },
    { label: "2", value: 2, type: "number" },
    { label: "3", value: 3, type: "number" },
    { label: "+", value: "+", type: "operator" },
    { label: "4", value: 4, type: "number" },
    { label: "5", value: 5, type: "number" },
    { label: "6", value: 6, type: "number" },
    { label: "-", value: "-", type: "operator" },
    { label: "7", value: 7, type: "number" },
    { label: "8", value: 8, type: "number" },
    { label: "9", value: 9, type: "number" },
    { label: "x", value: "*", type: "operator" },
    { label: "0", value: 0, type: "number" },
    { label: ".", value: ".", type: "number" },
    { label: "=", value: "=", type: "calculate" },
    { label: "÷", value: "/", type: "operator" },
    { label: "C", value: "C", type: "clear" },
    { label: <FaBackspace size={24} />, value: "backspace", type: "clear" },
  ];

   // Função que gerencia o clique em qualquer botão
   const handleClick = (button) => {
    switch (button.type) {
      case "number":
        onNumberClick(button.value); // Chama função para números
        break;
      case "operator":
        onOperatorClick(button.value); // Chama função para operadores
        break;
      case "clear":
        if (button.value === "backspace") {
          onBackspaceClick(); // Chama função para apagar
        } else {
          onClearClick(); // Chama função para limpar tudo
        }
        break;
      case "calculate":
        onCalculateClick(); // Chama função para calcular
        break;
      default:
        break;
    }
  };

  return (
    <div className="row row-cols-4 g-3">
      {/* Mapeia o array de botões para criar os elementos */}
      {buttons.map((button, index) => (
        <div key={index} className="col">
          <button
            className={`btn w-100 py-3 d-flex justify-content-center align-items-center ${
              button.type === "number"
                ? "btn-outline-light"
                : button.type === "operator"
                ? "btn-outline-warning"
                : button.type === "calculate"
                ? "btn-primary"
                : button.type === "clear" && button.value === "C"
                ? "btn-success"
                : button.type === "clear" && button.value === "backspace"
                ? "btn-danger"
                : "btn-light"
            }`}
            onClick={() => handleClick(button)}
          >
            {button.label}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Buttons;
