
const btnAv = document.querySelectorAll('.btn_av');
const btnSelect = document.querySelector('.btn_select');
const camp1 = document.querySelector('.camp_1');
const camp2 = document.querySelector('.camp_2');
const textofim = document.querySelector('.textofim');
function avaliacao() {
let notafinal;

   document.addEventListener('click', function (e) {
      const el = e.target;
      let notael = el.innerText;
      
      if (notael !== "Submit") {
         nota(notael);
         return;
      }
      if (notafinal <= 5) {
         alert(`You select ${notafinal}`);
         notaf(camp1, camp2);
         return;
      };
   });

   function nota(notael) {
      if (notael === "1") {
         remove();
         add(notael);
         return;
      };
      if (notael === "2") {
         remove();
         add(notael);
         return;
      };
      if (notael === "3") {
         remove();
         add(notael);
         return;
      };
      if (notael === "4") {
         remove();
         add(notael);
         return;
      };
      if (notael === "5") {
         remove();
         add(notael);
         return;
      };
   }

   function add(notael) {
      alert('Muito Obrigado!');
      notafinal = notael;
      btnAv[notafinal - 1].classList.add('radcir');
   }
   
   function remove() {
      btnAv[0].classList.remove('radcir');
      btnAv[1].classList.remove('radcir');
      btnAv[2].classList.remove('radcir');
      btnAv[3].classList.remove('radcir');
      btnAv[4].classList.remove('radcir');
      notafinal = "";
      return;
   }
   function notaf(camp1, camp2){
      camp1.classList.add('ocult');
      camp2.classList.remove('ocult');
      textofim.innerHTML= `You selected ${notafinal} out of 5`;
   }

}

avaliacao(btnAv, btnSelect, camp1, camp2);