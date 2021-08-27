export default function animacaoScroll(section) {
  const sections = document.querySelectorAll(section);
  const windowsMetade = window.innerHeight * 0.5;
  console.log(windowsMetade);

  // Pega a distância de cada item em relação
  // ao topo do site

  const getDistance = () => {
    const distance = [...sections].map((itemSection) => {
      const offset = itemSection.offsetTop;
      return {
        element: itemSection,
        offset: Math.floor(offset - windowsMetade),
      };
    });
    return distance;
  };

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  const checkDistance = () => {
    const distanceCheck = getDistance();

    distanceCheck.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        console.log(window.pageYOffset);

        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  };
  function init() {
    if (sections.length) {
      checkDistance();
      getDistance();
      window.addEventListener("scroll", checkDistance);
    }

    return animacaoScroll();
  }
  // Remove o event de scroll
  const stop = () => {
    window.removeEventListener("scroll", checkDistance);
  };

  return Object.freeze({
    init,
    stop,
  });
}
