const input = document.getElementById("numInput");
const button = document.getElementById("btnGerar");
const resultado = document.getElementById("resultado");

// Função para validar e gerar a tabuada
function gerarTabuada() {
  const valor = input.value;

  // Validação rigorosa:
  // 1. Não pode estar vazio
  // 2. Não pode conter ponto ou vírgula (apenas dígitos)
  // 3. Não pode ser negativo
  if (
    valor === "" ||
    valor.includes(".") ||
    valor.includes(",") ||
    parseInt(valor) < 0
  ) {
    alert(
      "Por favor, insira um número inteiro positivo (sem pontos, vírgulas ou letras).",
    );
    input.value = "";
    resultado.innerHTML = "";
    return;
  }

  const n = parseInt(valor);
  resultado.innerHTML = ""; // Limpa resultados anteriores

  for (let i = 1; i <= 20; i++) {
    
    const item = document.createElement("div");
    item.className = "tabuada-item";
    item.innerHTML = `<strong>${n}</strong> x ${i} = <strong>${n * i}</strong>`;
    resultado.appendChild(item);
  }
}

// Evento de clique no botão
button.addEventListener("click", gerarTabuada);

// Evento de tecla 'Enter'
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    gerarTabuada();
  }
});

// Impedir digitação de caracteres inválidos (., ,, e, + , -) no teclado
input.addEventListener("keydown", (e) => {
  if ([".", ",", "e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }
});

