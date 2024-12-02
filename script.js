var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
    start:"top top",
    scrub:1,
    pin:true,
    end:"bottom -250%"
    } 
},"hello")
t1.to("#bottom img",{
scale:1,
rotate:"-180deg",
duration:1,
        stagger:.1,
        ease:Power1
},"hello")
.to("#top img",{
    scale:1,
    duration:1,
        stagger:.1,
        ease:Power1
},"hello")
.to("#cimg img",{
    scale:"0",
    duration:1,
    ease:Power1
},"hello")
.to("#centreimage h5",{
    opacity:0,
    ease:Power1
},"hello")
.to("#circle",{
    scale:.6,
    ease:Power1
},"hello")
.to("#home>h1#gallery",{
    bottom:"-50%",
    ease:Power1
},"hello")
.to("#gola",{
    top:"50%",
    scale:2,
    ease:Power1
})
.to("#gola",{
    opacity:0,
    ease:Power1
},"hello2")
.to("#smcircle",{
    opacity:0,
    ease:Power1
},"hello2")
.to("#circle",{
    opacity:0,
    ease:Power1
},"hello2")
.to("#pf",{
    bottom:"2%",
    rotate:0
},"hello")
.to("#pinkpart",{
    top:0,
    ease:Power1
})
.to("#pinkpart",{
    top:"-60%",
    ease:Power1
})
var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start:"top top",
        pin:true,
        scrub:1,
        end:"bottom -250%"
    }
})
t2.to(".circle",{
    top:"50%",
    stagger:.1,
    duration:3,
    ease:Power1
})
.to(".pi",{
    left:"50%",
    ease:Power1

})
.to(".pu",{
    left:"50%",
    ease:Power1

})
.to(".pi",{
    scale:10,
    ease:Power1,
     background:"linear-gradient(to right,#d5a7b4,#B4AAD5)",
})
.to("#stop  h1",{
    left:"-150%",
    ease:Power1,
    duration:5

})
.to("#sbtm p:nth-child(1)",{
    opacity:1,
    ease:Power1,
    duration:3

},"a")
.to("#sbtm p:nth-child(2)",{
    opacity:0,
    ease:Power1,
    duration:3

},"a")
