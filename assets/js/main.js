window.addEventListener('DOMContentLoaded', () => {
    //==========================================
    // code for navbar functionality
    //==========================================
    const header = document.querySelector("header");
    window.addEventListener('scroll', () => {
        if (scrollY > 60) {
            header.style.backgroundColor = '#00000088';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    })
    //==========================================
    // End navbar functionality
    //==========================================


    //==========================================
    // code for dropdown
    //==========================================
    const navDropDown = document.querySelector('nav #dropdown');
    navDropDown.addEventListener('click', () => {
        document.querySelector('nav #dropdown-list').classList.toggle('d-none');
        navDropDown.classList.toggle('fa-angle-up');
    })
    //==========================================
    // End code for dropdown
    //==========================================


    //==========================================
    // code for nested dropdown
    //==========================================
    const navNestedDropDown = document.querySelector('nav #dropdown-nested');
    navNestedDropDown.addEventListener('click', () => {
        document.querySelector('nav #dropdown-nested-list').classList.toggle('d-none');
        navNestedDropDown.classList.toggle('fa-angle-up');
    })
    //==========================================
    // End code for nested dropdown
    //==========================================  


    //==========================================
    // code for navbar link 
    //==========================================
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(navLink=> {
        // navLink.setAttribute('data-bs-toggle', 'modal');
        //     navLink.setAttribute('data-bs-target', '#exampleModal')
            navLink.addEventListener('click', ()=> {
            // document.querySelector('nav').classList.add('d-none')
            // navLink.removeAttribute('data-bs-toggle', 'modal');
            // navLink.removeAttribute('data-bs-target', '#exampleModal')
            
            document.querySelector('nav').setAttribute('data-bs-toggle', 'modal');
            document.querySelector('nav').setAttribute('data-bs-target', '#exampleModal')
        })
    })
    //==========================================
    // End code for navbar link 
    //==========================================
    
    
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================
    //==========================================


})