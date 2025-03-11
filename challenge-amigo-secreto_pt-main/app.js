//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    input.value = "";
    return;
  }

  if (amigos.length >= 10) {
    alert("Limite de 10 amigos atingido!");
    return;
  }

  amigos.push(nome);
  mostrarNaLista();
  input.value = "";
}

function removerAmigo(indice) {
  amigos.splice(indice, 1);
  mostrarNaLista();
  document.getElementById("resultado").innerHTML = "";
}

function mostrarNaLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome, indice) => {
    lista.innerHTML += `
            <li class="name-item">
                <span>${nome}</span>
                <button class="remove-button" onclick="removerAmigo(${indice})">✕</button>
            </li>
        `;
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  // Verificação mínima
  if (amigos.length < 3) {
    alert("Adicione pelo menos 3 pessoas!");
    return;
  }

  let sorteados = [...amigos];
  embaralharArray(sorteados);

  let tentativas = 0;
  while (tentativas < 100) {
    let problemasEncontrados = false;

    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === sorteados[i]) {
        problemasEncontrados = true;
        embaralharArray(sorteados);
        break;
      }
    }

    if (!problemasEncontrados) {
      break;
    }

    tentativas++;
  }

  for (let i = 0; i < amigos.length; i++) {
    resultado.innerHTML += `
            <li class="result-item">
                ${amigos[i]} → ${sorteados[i]}
            </li>
        `;
  }
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
