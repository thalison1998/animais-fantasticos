export default function Accordion(list) {
  const accordionList = document.querySelectorAll(list);
  const activeClass = 'ativo';

  // escolher index inicial do item ativado no carregamento da página//
  function changeInitAcordion(index) {
    const indexChange = index > accordionList.length - 1 ? 0 : index;
    accordionList[indexChange].classList.add(activeClass);
    accordionList[indexChange].nextElementSibling.classList.add(activeClass);
    return this;
  }

  function toggleAccordion({ target }) {
    target.classList.toggle(activeClass);
    target.nextElementSibling.classList.toggle(activeClass);
  }
  // adiciona os eventos ao acordion
  function addAcordionEvent() {
    accordionList.forEach((item) => {
      item.addEventListener('click', toggleAccordion);
    });
  }
  // inicia a função
  function init() {
    if (accordionList.length) {
      addAcordionEvent();
    }
    return this;
  }
  return {
    init,
    changeInitAcordion,
  };
}
