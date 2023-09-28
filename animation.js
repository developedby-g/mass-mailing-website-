
const myText=new SplitType('#hero-heading',{type:'words,chars'});//gsap library
const chars =myText.chars;
gsap.set('#hero-heading',{perspective:400})
gsap.from(chars,{
          opacity:0,
          scale:4,
          duration:0.4,
          y:40,
          stagger:0.06,
          rotationX:-180,
          ease:'back',
        
})

