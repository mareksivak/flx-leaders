new WOW().init();


//$(".nav-wrapper").css("background", "yellow");

//$(document).ready(function() {
$(window).ready(function() {

    console.log("ready");
    //$('#nav-close').addClass("AAA");
    $(".nav-wrapper","#nav-close").css("background-color", "yellow");
    
    //open mobile nav
    $("#nav-open").click(function() {
        console.log("open");
        $(".mobile-nav").show();
    });
    
    //close mobile nav
    $("#nav-close,.mobile-nav .menu,.nav-wrapper").click(function() {
        console.log("close");
        $(".mobile-nav").hide();
    });
});

console.log("init");

