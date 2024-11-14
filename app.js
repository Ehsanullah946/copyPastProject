const textarea=document.querySelector(".textarea");
const btn=document.querySelector(".btn");


btn.addEventListener('click', ()=>{
    textarea.select();
   const textvalue= textarea.value;

    navigator.clipboard.writeText(textvalue);
    btn.innerHTML="Copied";
    btn.style.backgroundColor='#03A9f4';
    setTimeout(() => {
         btn.innerHTML='Copy';
         btn.style.backgroundColor='#B3E5FC' ;
    },1500);

  
});