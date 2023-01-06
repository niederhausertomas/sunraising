const nav = document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 650) {
            nav.classList.add('active_nav');
        } else {
            nav.classList.remove('active_nav');
        }
    })

const des = document.getElementById('desp');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 650) {
            des.classList.add('text-black');
        } else {
            des.classList.remove('text-black');
        }
})

const des1 = document.getElementById('desp1');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 650) {
            des1.classList.add('text-black');
        } else {
            des1.classList.remove('text-black');
        }
})

const des2 = document.getElementById('desp2');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 650) {
            des2.classList.add('text-black');
        } else {
            des2.classList.remove('text-black');
        }
})

const flecha1 = document.getElementById('flecha1')
flecha1.addEventListener('mouseover', flechas);
let flecha2 = document.getElementById('flecha2');
function flechas(){
    flecha2.style.marginLeft = '160px';
    flecha2.style.transition = '1s';
    }
    flecha1.addEventListener('mouseout', flechas2)
    function flechas2(){
        flecha2.style.marginLeft = '60px';
        flecha2.style.transition = '12s';
        }

    const flecha3 = document.getElementById('flecha3')
    let flecha4 = document.getElementById('flecha4');
    flecha3.addEventListener('mouseover', ()=>{
    flecha4.style.marginLeft = '160px';
    flecha4.style.transition = '1s';
    })
    flecha3.addEventListener('mouseout', ()=>{
        flecha4.style.marginLeft = '60px';
        flecha4.style.transition = '12s';
        })

    const flecha5 = document.getElementById('flecha5')
    let flecha6 = document.getElementById('flecha6');
    flecha5.addEventListener('mouseover', ()=>{
    flecha6.style.marginLeft = '160px';
    flecha6.style.transition = '1s';
    })
    flecha5.addEventListener('mouseout', ()=>{
        flecha6.style.marginLeft = '60px';
        flecha6.style.transition = '12s';
        })

    const flecha7 = document.getElementById('flecha7')
    let flecha8 = document.getElementById('flecha8');
    flecha7.addEventListener('mouseover', ()=>{
    flecha8.style.marginLeft = '160px';
    flecha8.style.transition = '1s';
    })
    flecha7.addEventListener('mouseout', ()=>{
        flecha8.style.marginLeft = '60px';
        flecha8.style.transition = '12s';
        })

    const flecha9 = document.getElementById('flecha9')
    let flecha10 = document.getElementById('flecha10');
    flecha9.addEventListener('mouseover', ()=>{
    flecha10.style.marginLeft = '160px';
    flecha10.style.transition = '1s';
    })
    flecha9.addEventListener('mouseout', ()=>{
        flecha10.style.marginLeft = '60px';
        flecha10.style.transition = '12s';
        })

    const flecha11 = document.getElementById('flecha11')
    let flecha12 = document.getElementById('flecha12');
    flecha11.addEventListener('mouseover', ()=>{
    flecha12.style.marginLeft = '160px';
    flecha12.style.transition = '1s';
    })
    flecha11.addEventListener('mouseout', ()=>{
        flecha12.style.marginLeft = '60px';
        flecha12.style.transition = '12s';
        })

    const flecha13 = document.getElementById('flecha13')
    let flecha14 = document.getElementById('flecha14');
    flecha13.addEventListener('mouseover', ()=>{
    flecha14.style.marginLeft = '160px';
    flecha14.style.transition = '1s';
    })
    flecha13.addEventListener('mouseout', ()=>{
        flecha14.style.marginLeft = '60px';
        flecha14.style.transition = '12s';
        })
//Formulario de contacto. formspree.io
    const $form = document.querySelector('#form')
    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event){
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers:{
                'Accept': 'application/json'
            }
        })
        if(response.ok){
            this.reset();
            alert("Mensaje enviado!")
        }
    }