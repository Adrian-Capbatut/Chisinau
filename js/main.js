$(function(){
    $('.slider').slick({
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>', 
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt="prev arrow"></button>',
      fade:true,
      responsive: [
        {
          breakpoint: 441,
          settings: {
            arrows: false
          }
        }
      ]
    });
});