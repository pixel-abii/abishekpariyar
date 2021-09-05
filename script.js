const scrollContainer = document.querySelector(".main-works-content");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


let showMenu = document.querySelector('.hovering-menu')
window.addEventListener('scroll', function(){
  if(scrollY > 300){
    showMenu.classList.add('show-hovering' );
}
else{
  showMenu.classList.remove('show-hovering' );

}});

window.addEventListener('scroll', function(){
  if(scrollY > 1650){
      showMenu.classList.add('show-hovering-white' );
  }
  else{
    showMenu.classList.remove('show-hovering-white' );

  }
});





// scrolll trigger gsap

if($(window).width()<=600){
  
gsap.registerPlugin(ScrollTrigger);
 
gsap.to('.paragraph-abt-me', {
    scrollTrigger:{
      trigger:  '.main-abt',
      scrub : 1, 
    
     start : "2px 400px",
     end: "2px 200px ",
     

    },
    x:0,
    opacity:1,
  
   
    
});
}else{
  
gsap.registerPlugin(ScrollTrigger);
 
gsap.to('.paragraph-abt-me', {
    scrollTrigger:{
      trigger:  '.main-abt',
      scrub : 1, 
    
     start : "2px 400px",
     end: "2px 200px ",
     

    },
    x:-100,
    opacity:1,
  
   
    
});
}



if ( $(window).width() <= 600 ) {
  gsap.registerPlugin(ScrollTrigger);
 
  gsap.to('.image-part ', {
      scrollTrigger:{
        trigger:  '.main-abt',
       scrub:1,
        start : "2px 400px",
        end: "2px 1px ",
  
      },
      x:0,
      opacity:1,
    
     
      
  });
}else{
  gsap.registerPlugin(ScrollTrigger);
 
  gsap.to('.image-part ', {
      scrollTrigger:{
        trigger:  '.main-abt',
       scrub:1,
        start : "2px 400px",
        end: "2px 1px ",
  
      },
      x:100,
      opacity:1,
    
     
      
  });
}



// for experties-section



if ( $(window).width() <= 600 ) {
  gsap.registerPlugin(ScrollTrigger);
 
  gsap.to('.content-box ', {
      scrollTrigger:{
        trigger:  '.experties',
       scrub:1,
        start : "2px 201px",
        end: "2px 1px ",
  
      },
       y:0,
      opacity:1,
    
     
      
  });
}else{
  gsap.registerPlugin(ScrollTrigger);
 
gsap.to('.content-box ', {
    scrollTrigger:{
      trigger:  '.experties',
     scrub:1,
      start : "2px 201px",
      end: "2px 1px ",

    },
     y:-100,
    opacity:1,
  
   
    
});
}