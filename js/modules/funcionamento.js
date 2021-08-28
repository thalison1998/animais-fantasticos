export default function funcionamento(dia) {
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

    if (dateCheck(diasSemana, horarioSemana)) {
      funcionamentos.classList.add("aberto");
    }
  };

  const init = () => {
    if (funcionamentos) {
      dateAtived();
    }
  };

  return Object.freeze({
    init,
  });
}
