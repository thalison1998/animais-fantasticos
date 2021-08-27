
import outsideClick from "./outsideclick.js";

export default function dropdownMenu(menus, events) {

  const dropdownMenus = document.querySelectorAll(menus);

  if (events === undefined) events = ["touchstart", "click"];
  else events = events;

  function addDropdownMenuEvent() {
    dropdownMenus.forEach((menu) => {
      events.forEach((userEvent) => {
        menu.addEventListener(userEvent, activeDropDownMenu);
      });
    });
  }

  function activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    this.classList.add("active");
    outsideClick(element, events, () => {
      element.classList.remove("active");
    });
  }
  function init() {
    if (dropdownMenus.length) {
      addDropdownMenuEvent();
    }
  }
  return {
    init,
  };
}
