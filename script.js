//javaScript

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


//head
gsap.from("#illustration", 1, {
    delay: 0.5,
    opacity: 0,
    ease: Expo.easeInOut
    
  })

  //pauline touvier
  gsap.from("#pauline", {opacity:0, xPercent:-100, duration:2, scrollTrigger:"#pauline"});



//experiences professionnelles
		gsap.to(".filled-text, .outline-text", {
			scrollTrigger:{
				trigger: ".filled-text, .outline-text", 
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1
			},
			x: 200
		})

		gsap.to(".bloc1", {
			scrollTrigger:{
				trigger: ".bloc1",
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1,
				markers: true
			},
			x: -250,

		})

//logos
let logos = gsap.timeline({yoyo: true});
    logos.from(".logos #logo1", {opacity:0, duration:0.8, ease:"expo.out"}),
    logos.from(".logos #logo2", {opacity:0, duration:0.8, ease:"expo.out"}),


    ScrollTrigger.create({
        animation:logos,
        trigger:".logos",
        start:"top bottom",
        toggleActions:"play none none none",
        //scrub:true,
        //pin:true,
      });

/*logo écriture**/
      gsap.to("#titre1", {
        scrollTrigger:{
          trigger: "#titre1", 
          start: "top bottom", 
          end: "bottom top", 
          scrub: 1
        },
        x: 200
      })
  
  //logo titre
  gsap.from("#pp1", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#pp1", start:top});

  //logo-logo
  gsap.from("#logo-titre", {opacity:0, xPercent:-100, duration:2, scrollTrigger:"#logo-titre"});

  //adecco animation
  gsap.from('#telephone', {opacity:0, scale:0.7, duration:0.9, ease: "power4.out", delay:0.6,
  scrollTrigger:{
    trigger: "#telephone", 
    start: "top bottom",  
    scrub: 1
  }
});


  //adecco-titre
  gsap.from("#pp2", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#pp2", start:top});



/*Projet écriture**/
gsap.to("#titre2", {
  scrollTrigger:{
    trigger: "#titre2", 
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1
  },
  x: 100
})


//illu titre
gsap.from("#pperso", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#pperso", start:top});

//illustration apparition
let Illustrations = gsap.timeline({});
    Illustrations.from(".scroll-illuss .n1", {opacity:0, duration:0.5, ease:"expo.out"}),
    Illustrations.from(".scroll-illuss .n2", {opacity:0, duration:0.5, ease:"expo.out"}),
    Illustrations.from(".scroll-illuss .n3", {opacity:0, duration:0.5, ease:"expo.out"})


  ScrollTrigger.create({
    animation:Illustrations,
    trigger:".scroll-illuss",
    start:"center bottom",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });

let Illustrations2 = gsap.timeline({});
    Illustrations2.from(".scroll-illus2 .n4", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations2.from(".scroll-illus2 .n5", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations2.from(".scroll-illus2 .n6", {opacity:0, duration:0.5, ease:"expo.out"})

  ScrollTrigger.create({
    animation:Illustrations2,
    trigger:".scroll-illus2",
    start:"center bottom",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });

let Illustrations3 = gsap.timeline({});
    Illustrations3.from(".scroll-illus3 .n7", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations3.from(".scroll-illus3 .n8", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations3.from(".scroll-illus3 .n9", {opacity:0, duration:0.5, ease:"expo.out"})

  ScrollTrigger.create({
    animation:Illustrations3,
    trigger:".scroll-illus3",
    start:"center bottom",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });

let Illustrations4 = gsap.timeline({});
    Illustrations4.from(".scroll-illus4 .n10", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations4.from(".scroll-illus4 .n11", {opacity:0, duration:0.5, ease:"expo.out"})
    Illustrations4.from(".scroll-illus4 .n12", {opacity:0, duration:0.5, ease:"expo.out"})

  ScrollTrigger.create({
    animation:Illustrations4,
    trigger:".scroll-illus4",
    start:"center bottom",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });


//affiche titre
gsap.from("#affiche", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#affiche", start:top});

  //musée affiche
  let affiche = gsap.timeline({});
      affiche.from(".scroll-affiches .paysage", {opacity:0, xPercent:-100, duration:1, ease:"expo.out"});
      affiche.from(".scroll-affiches .portrait", {opacity:0, xPercent:-100, duration:1, ease:"expo.out"});
      affiche.from(".scroll-affiches .gif", {opacity:0, xPercent:-100, duration:1, ease:"expo.out"});

      ScrollTrigger.create({
        animation:affiche,
        trigger:".scroll-affiches",
        start:"top bottom",
        toggleActions:"play none none none",
        //scrub:true,
        //pin:true,
      });

//iDesign numérique
let Design = gsap.timeline({});
    Design.from(".scroll-duo #ljubljana", {opacity:0, duration:0.8, ease:"expo.out"}),
    Design.from(".scroll-duo #matcha", {opacity:0, duration:0.8, ease:"expo.out"}),


  ScrollTrigger.create({
    animation:Design,
    trigger:".scroll-duo",
    start:"top center",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });

let Dadaisme = gsap.timeline({});
    Dadaisme.from(".scroll-dada #dada", {opacity:0, duration:0.8, ease:"expo.out"}),

  ScrollTrigger.create({
    animation:Dadaisme,
    trigger:".scroll-dada",
    start:"center center",
    toggleActions:"play none none none",
    //scrub:true,
    //pin:true,
  });


  //adecco animation
  gsap.from('#charte', {opacity:0, scale:0.7, duration:0.9, ease: "power4.out", delay:0.6,
  scrollTrigger:{
    trigger: "#charte", 
    start: "top bottom",  
    scrub: 1
  }
});

//animation 2d shampoing
let fleur = gsap.timeline({});
fleur.from(".fleur .bouton-fleur", {opacity:0, yPercent:100, duration:1, ease:"expo.out"});

ScrollTrigger.create({
  animation:fleur,
  trigger:".fleur",
  start:"center bottom",
  toggleActions:"play none none none",
  //scrub:true,
  //pin:true,
});

document.querySelector('.bouton-fleur').addEventListener('click', accesFleur);

function accesFleur() {
	document.querySelector('#shampoing').style.display = 'block';
  document.querySelector('.bouton-fleur').style.display = 'none';
}

//marque de shampoing
let bouteille = gsap.timeline({});
      bouteille.from(".scroll-bouteille .bleu", {opacity:0, yPercent:100, duration:0.8, ease:"expo.out"});
      bouteille.from(".scroll-bouteille .lila", {opacity:0, yPercent:100, duration:0.8, ease:"expo.out"});
      bouteille.from(".scroll-bouteille .rose", {opacity:0, yPercent:100, duration:0.8, ease:"expo.out"});
      bouteille.from(".scroll-bouteille .jasmin", {opacity:0, yPercent:100, duration:0.8, ease:"expo.out"});
      bouteille.from(".scroll-bouteille .capucine", {opacity:0, yPercent:100, duration:0.8, ease:"expo.out"});

      ScrollTrigger.create({
        animation:bouteille,
        trigger:".scroll-bouteille",
        start:"center bottom",
        toggleActions:"play none none none",
        //scrub:true,
        //pin:true,
      });


//titre logo
gsap.from("#logo-projet", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#logo-projet", start:top});

//animation logo
let animation = gsap.timeline({});
animation.from(".animation .bouton-gd", {opacity:0, yPercent:100, duration:1, ease:"expo.out"});

ScrollTrigger.create({
  animation:animation,
  trigger:".animation",
  start:"center bottom",
  toggleActions:"play none none none",
  //scrub:true,
  //pin:true,
});

document.querySelector('.bouton-gd').addEventListener('click', accesAnimation);

function accesAnimation() {
	document.querySelector('#gd').style.display = 'block';
  document.querySelector('.bouton-gd').style.display = 'none';
}

//lumine
let expo = gsap.timeline({});
expo.from(".expo .bouton-lumine", {opacity:0, yPercent:100, duration:1, ease:"expo.out"});

ScrollTrigger.create({
  animation:expo,
  trigger:".expo",
  start:"center bottom",
  toggleActions:"play none none none",
  //scrub:true,
  //pin:true,
});

document.querySelector('.bouton-lumine').addEventListener('click', accesExpo);

function accesExpo() {
	document.querySelector('#after-movie').style.display = 'block';
  document.querySelector('.bouton-lumine').style.display = 'none';
}

//titre logo
gsap.from("#jeux-video", {opacity:0, xPercent:-100, duration:1, scrollTrigger:"#jeux-video", start:top});


//PHOTOGRAPHIE 



//videos
gsap.to("#titre3", {
        scrollTrigger:{
          trigger: "#titre3", 
          start: "top bottom", 
          end: "bottom top", 
          scrub: 1
        },
        x: 200
      })


/*Projet écriture**/
gsap.to("#titre4", {
  scrollTrigger:{
    trigger: "#titre4", 
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1
  },
  x: 100
})

let video = gsap.timeline({});
video.from(".video #button-v1", {opacity:0, yPercent:-100, duration:1, ease:"expo.out"});
video.from(".video #button-v2", {opacity:0, yPercent:-100, duration:1, ease:"expo.out"});
video.from(".video #button-v3", {opacity:0, yPercent:-100, duration:1, ease:"expo.out"});


ScrollTrigger.create({
  animation:video,
  trigger:".video",
  start:"top bottom",
  toggleActions:"play none none none",
  //scrub:true,
  //pin:true,
});

document.querySelector('#button-v1').addEventListener('click', accesVideo);

function accesVideo() {
	document.querySelector('#v1').style.display = 'block';
  document.querySelector('#button-v1').style.display = 'none';
}

document.querySelector('#button-v2').addEventListener('click', accesVideo2);

function accesVideo2() {
	document.querySelector('#v2').style.display = 'block';
  document.querySelector('#button-v2').style.display = 'none';
}

document.querySelector('#button-v3').addEventListener('click', accesVideo3);

function accesVideo3() {
	document.querySelector('#v3').style.display = 'block';
  document.querySelector('#button-v3').style.display = 'none';
}


