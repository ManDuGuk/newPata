const pages = new Pageable("#container");


navbar = document.querySelector('.navbar').querySelectorAll('a');
pgPips = document.querySelector('.pg-pips').querySelectorAll('a');

navbar.forEach(element => {
    element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove('nav-link'))
        this.classList.add('nav-link');
    })
});

pgPips.forEach(element => {
    element.addEventListener('click', function () {

        navbar.forEach(nav => {
            nav.classList.remove('nav-link')
            if (nav.href === element.href) {
                nav.classList.add('nav-link');
            }
        })

    })

});

pages.on("scroll.end", data => {
    let hash = window.location.hash;
    console.log(hash);
});

