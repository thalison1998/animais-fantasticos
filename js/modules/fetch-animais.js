import animaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no doom //
  const preencherAnimais = (animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  };

  // anima o numero de cada animal

  const animaAnimaisNumeros = () => {
    const animatesNumbers = animaNumeros("[data-numero]", ".numeros", "ativo");
    animatesNumbers.init();
  };
  // puxa os animais atráves de um arquivo json
  // cria cada animal utilizando o createAnimal
  async function criarAnimais() {
    try {
      // fetch aguarda a resposta
      const animaisResponse = await fetch(url);
      // transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      //após a transformação em json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
