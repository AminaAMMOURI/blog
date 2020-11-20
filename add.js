

  ScrollReveal().reveal('.maphoto', { delay: '100', opacity: '0' });
  ScrollReveal().reveal('.modal', { delay: '4000'});

  
//MODAL
// const activeModal = (time) => {
//   setTimeout(() => {
//     document.querySelector('.modal').classList.add('is-active');
//   }, time);
// }
// activeModal(3000);

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})