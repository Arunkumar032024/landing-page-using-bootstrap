// navbar functionality
const header = document.querySelector("header");
window.addEventListener('scroll', ()=>{
    if(scrollY > 60){
        header.style.backgroundColor = '#00000088';
    }else{
        header.style.backgroundColor = 'transparent';
    }  
})
// End navbar functionality