export function calcularAnosInteiros(dataInicio : Date, dataFim: Date) {
  const inicio = new Date(dataInicio);
  const fim = new Date(dataFim);

  let anos = fim.getFullYear() - inicio.getFullYear();
  
  // Ajusta se o aniversário ainda não passou no ano atual
  const mesAtual = fim.getMonth();
  const diaAtual = fim.getDate();
  const mesNasc = inicio.getMonth();
  const diaNasc = inicio.getDate();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
    anos--;
  }

  return anos;
}
