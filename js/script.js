import Accordion from "./modules/accordion";
import animacaoScroll from "./modules/scroll-animacao";
import tabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import Tooltip from "./modules/tooltip";
import initDropdownMenu from "./modules/dropdown-menu";
import initMenuMobile from "./modules/menu-mobile";
import initFuncionamento from "./modules/funcionamento";
import fetchAnimais from "./modules/fetch-animais";
import fetchBitcoin from "./modules/fetch-bitcoin";

const accordion = Accordion('[data-anime="accordion"] dt');
accordion.init().changeInitAcordion(0);

const tabN = tabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabN.init();
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

const anima = animacaoScroll('[data-anime="scroll"]');
anima.init();

fetchAnimais("../../animaisapi.json",'.numeros-grid');
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");