 const menu = document.querySelector ('.menu');
 const hide = document.querySelector ('.hide_button');

 menu.addEventListener('click', () =>
    hide.style.display = 'block');
 

 const closeButtons = document.querySelectorAll('.close');
 closeButtons.forEach (el => {
el.addEventListener ('click', e => {
   e.preventDefault();
   e.target.closest('.hide_button').style.display = 'none';
});
  });

  
        //sintax for dark & light mode

document.addEventListener('DOMContentLoaded', () => {
   const modeBody = document.querySelectorAll('#mode');
   modeBody.forEach(el => {
       el.addEventListener('click',(e) => {
           document.body.classList.toggle('dark-theme');
           e.preventDefault();
         });
      });
  });










 
 