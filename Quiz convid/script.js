
window.addEventListener("DOMContentLoaded", (event) =>  {
    const form = document.querySelector('form');


form.addEventListener('submit', (event) => {


  let Totaloui = 0;
  let Totalnon = 0;
  const inputs = form.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    if (input.checked) {
      if (input.value === 'oui') {
        Totaloui++;
      } else if (input.value === 'non') {
        Totalnon++;
      }
    }
  });

  
  
  if (Totaloui > Totalnon) {
    alert(`VOUS ÊTES ATTEINT DE LA COVID-19.`);
  } else {
    alert(`VOUS N'ÊTES PAS ATTEINT DE LA COVID-19.`);
  }
  if (Totaloui=Totalnon) {
    alert('Vous êtes suspect');
  }

  
  
});
































});