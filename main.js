var navLinks = document.querySelectorAll('.container .sidebar .main_menu li');
var section = document.querySelectorAll('.container .main_content > div');
var documentEl = document;
console.log(navLinks)
console.log(section)
console.log(documentEl)

documentEl.addEventListener('scroll', function() {
    var currentScrollPos = window.scrollY;
    section.forEach(function(el) {
        if (el.getBoundingClientRect().y < currentScrollPos && currentScrollPos < (el.getBoundingClientRect().y + el.offsetHeight)) {
            var targetClass = '.' + el.className
            navLinks.forEach(function(navEl) {
                navEl.classList.remove('active')
            })
            document.querySelector(targetClass).classList.add('active')
        }
    })
})