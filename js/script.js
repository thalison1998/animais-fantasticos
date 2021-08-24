import Accordion from "./modules/accordion";
import initAnimacaoScroll from "./modules/scroll-animacao";
import tabNav from "./modules/tabnav";
import Modal from "./modules/modal";
import initTooltip from "./modules/tooltip";
import initDropdownMenu from "./modules/dropdown-menu";
import initMenuMobile from "./modules/menu-mobile";
import initFuncionamento from "./modules/funcionamento";
import initFetchAnimais from "./modules/fetch-animais";
import initFetchBitcoin from "./modules/fetch-bitcoin";

const accordion = Accordion('[data-anime="accordion"] dt');
accordion.init().changeInitAcordion(0);

const tabN = tabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabN.init();
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();
