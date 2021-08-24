export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  // remove a tooltip e os eventos de mouseMove e mouseLeave

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // move a tooltip com base em seus estilos
  // de acordo com a posição do mouse

  onMouseMove(e) {
    this.tooltipBox.style.top = e.pageY + 20 + "px";

    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = e.pageX - 170 + "px";
    } else {
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    }
  }

  // criar a tooltip e adicionar os eventos
  // de mouseMove e mouseLeave
  // ao target
  onMouseOver({ currentTarget }) {
    // criar tooltipbox e colocar em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // criar tooltipbox e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
