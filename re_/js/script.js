$(window).ready(function() {
    // logo scroll
    console.log($(".logo").offset().top);
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 300){
            $(".logo").addClass("scroll");
        } else {
            $(".logo").removeClass("scroll");
        }    

        if($(window).scrollTop() > $(".logo").offset().top) {
            $("header").addClass("change");
            $(".main-menu > h1").css("color", "#f04f28");
            $(".order > button").addClass("btn-change");
            $(".logo-on").css("display", "block");
            

        } else {
            $("header").removeClass("change");
            $(".main-menu > h1").css("color", "");
            $(".order > button").removeClass("btn-change");
            $(".logo-on").css("display", "");
        }
    });

})

