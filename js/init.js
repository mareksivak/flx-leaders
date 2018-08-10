new WOW().init();
new Glide('.glide', {
  type: 'carousel',
  gap: 0,
  startAt: 0,
  perView: 3,
    breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  },
  peek: {
    before: 0,
    after: 80,
  }
}).mount();

//$(document).ready(function() {
$(window).ready(function() {

    console.log("ready");
    //$('#nav-close').addClass("AAA");
    $(".nav-wrapper","#nav-close").css("background-color", "yellow");
    
    //open mobile nav
    $("#nav-open").click(function() {
        console.log("open");
        $(".mobile-nav, .mobile-nav ul").addClass("show");
    });
    
    //close mobile nav
    $("#nav-close,.mobile-nav .menu,.nav-wrapper").click(function() {
        console.log("close");
        $(".mobile-nav, .mobile-nav ul").removeClass("show");
    });
});

console.log("init");

