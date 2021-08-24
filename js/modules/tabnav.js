export default function tabNav(menu, content) {
  const tabMenu = document.querySelectorAll(menu);
  const tabContent = document.querySelectorAll(content);
  const changeOfClass = 'ativo';

  // Ativa a tab de acordo com o index //

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(changeOfClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(changeOfClass, direcao);
  }

  // Adiciona os eventos nas tabs //

  function addTabNavEvent() {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }

  function init() {
    if (tabMenu.length && tabContent.length) {
      // ativa o primeiro item //
      activeTab(0);
      addTabNavEvent();
    }
    return this;
  }
  return {
    init,
  };
}
