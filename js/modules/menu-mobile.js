import outsideClick from "./outsideClick.js";

export default function menuMobile(menuBtn, listMenu, events) {
  const menuButton = document.querySelector(menuBtn);
  const menuList = document.querySelector(listMenu);
  if (events === undefined) events = ["touchstart", "click"];
  else events = events;
  const activeClass = "active";

  function addMenuMobileEvents() {
    events.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }

  function openMenu(event) {
    menuList.classList.add(activeClass);
    menuButton.classList.add(activeClass);
    outsideClick(menuList, events, () => {
      menuList.classList.remove(activeClass);
      menuButton.classList.remove(activeClass);
    });
  }
  function init() {
    if (!!menuButton && !!menuList) {
      addMenuMobileEvents();
    }
    return this;
  }
  return Object.freeze({
    init,
  });
}
