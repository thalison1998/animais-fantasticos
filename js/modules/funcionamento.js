export default function funcionamento(dia) {
  debugger
  const funcionamentos = document.querySelector(dia);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const dateCheck = (diasSemana, horarioSemana) => {
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    return semanaAberto && horarioAberto;
  };

  const dateAtived = () => {
    const diasSemana = funcionamentos.dataset.semana.split(",").map(Number);
    const horarioSemana = funcionamentos.dataset.horario.split(",").map(Number);
    const dateValidation = dateCheck(diasSemana, horarioSemana);
    return dateValidation;
  };
  const valid = () => {
    if (dateAtived()) {
      funcionamentos.classList.add("aberto");
    }
  };
  const init = () => {
    if (funcionamentos) {
      dateAtived();
      valid();
    }
  };

  return Object.freeze({
    init,
  });
}
