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
