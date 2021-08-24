export default function animaNumeros(numerosAnima, observeTg, observer) {
  const numeros = document.querySelectorAll(numerosAnima);

  // recebe um elemento no dom, com numero em seu texto
  // incrementa a partir do 0 até seu final
  function incremetarNumeros(numero) {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + inscremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  // ativa incrementoNumeros para
  // cada numero selecionado pelo dom
  function anima() {
    numeros.forEach((numero) => incremetarNumeros(numero));
  }

  let observerMut;
  // função que ocorre quando a mutação ocorrer
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains(observer)) {
      observerMut.disconnect();
      anima();
    }
  }
  const observerTarget = document.querySelector(observeTg);
  // adiciona o mutationObserve para verificar a
  // classe ativo quando for adicionada ao elemento target
  function addMutationObserver() {
    observerMut = new MutationObserver(handleMutation);
    observerMut.observe(observerTarget, { attributes: true });
  }
  // inicia
  function init() {
    if (numeros.length && observerTarget) {
      addMutationObserver();
    }

    return this;
  }
  return Object.freeze({
    init,
    incremetarNumeros,
  });
}
