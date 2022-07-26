document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const logoStartY = header.getBoundingClientRect().height;
    console.log(logoStartY);
})



$(window).ready(function() {
    $(window).scroll(function() {
        // $(window).scrollTop() > 50) {
            $(".re").addClass(".scroll");
        // }
    }) 
     


})