
function gola1() {
    var circle = document.querySelector(".main");
    var golaa = document.querySelector(".gola");
    circle.addEventListener("mousemove", function (dets) {
        golaa.style.left = dets.x - 10 + "px";
        golaa.style.top = dets.y - 10 + "px";

    })
}


function gola2() {
    var vg2 = document.querySelector("video");
    var golaa2 = document.querySelector(".gola2");
    vg2.addEventListener("mousemove", function (dets) {
        golaa2.style.left = dets.x - 50 + "px";
        golaa2.style.top = dets.y - 20 + "px";

    })
}

function videoenter() {
    var golaa = document.querySelector(".gola");
    var gola2 = document.querySelector('.gola2');
    var videoo = document.querySelector("video");
    videoo.addEventListener("mouseenter", function () {
        gola2.style.display = "block";
        golaa.style.display = "none";
    })
    videoo.addEventListener("mouseleave", function () {
        gola2.style.display = "none";
        golaa.style.display = "block";

    })

}

function navigation() {
    var bgwork = document.querySelector(".bg-pink-work");
    var bgstudio = document.querySelector(".bg-pink-studio");
    var bgcontact = document.querySelector(".bg-pink-contact");
    var all = document.querySelectorAll(".center>a");
    all.forEach(e => {
        console.log(e);

        if (e.id === "work") {
            e.addEventListener("mousemove", function () {
                bgwork.style.display = "block";
            })
            e.addEventListener("mouseleave", function () {
                bgwork.style.display = "none";
            })
        }
        if (e.id === "studio") {
            e.addEventListener("mousemove", function () {
                bgstudio.style.display = "block";
            })
            e.addEventListener("mouseleave", function () {
                bgstudio.style.display = "none";
            })
        }
        if (e.id === "contact") {
            e.addEventListener("mousemove", function () {
                bgcontact.style.display = "block";
            })
            e.addEventListener("mouseleave", function () {
                bgcontact.style.display = "none";
            })
        }
    })
}

function mode() {

    //     var page2 = document.querySelector(".page2");
    // var lefty=document.querySelector(".lefty");
    // var righty=document.querySelector(".righty");
    // var circle = document.querySelector(".main");
    // var right=document.querySelector(".right");
    // var check=0;
    // right.addEventListener("click",function(){
    //     circle.style.backgroundColor = "white";
    //     lefty.style.color  = "black";
    //     righty.style.color  = "black";


    // if(check==0){
    //     page2.style.backgroundColor = "black";
    //         check=1;
    //     }else{
    //         page2.style.backgroundColor = "white";
    //         check=0;
    //     }
    // })

}

function hoverimg() {
    var boxes = document.querySelectorAll(".page5-content-1");
    var goloo = document.querySelector(".gola");

    boxes.forEach(function (e) {

        e.addEventListener("mousemove", function () {
            var img = e.getAttribute("data-image");
            goloo.style.width = "350px";
            goloo.style.height = "250px";
            goloo.style.borderRadius = "10px";
            goloo.style.backgroundImage = `url(${img})`;
            goloo.style.transform = "translate(-50%,-50%)"
            goloo.style.backgroundColor = "transparent";

        })
        e.addEventListener("mouseleave", function () {
            goloo.style.width = "30px";
            goloo.style.height = "30px";
            goloo.style.borderRadius = "50%";
            goloo.style.backgroundImage = `none`
            goloo.style.transform = "translate(0%,0%)"
            goloo.style.backgroundColor = "rgb(237, 191, 255)";
        })
    })
}



gola1();
gola2();
videoenter();
navigation();
mode();
hoverimg();


var menubar = document.querySelector(".menu");
var navbar = document.querySelector(".nav-bar");
var flag=0;
menubar.addEventListener("click",function(){

    if(flag === 0){
    navbar.style.transform = "translateY(0%)";
    flag=1;
    }else{
    navbar.style.transform = "translateY(-100%)";
    flag=0;
}
})














gsap.from(".lefty", {
    rotate: 10,
})
gsap.from(".righty", {
    rotate: 10,
})

gsap.to(".content .lefty", {
    x: -100,
    duration: 2,
    delay: 2,

    scrollTrigger: {
        scroller: "body",
        trigger: ".page1",
        // markers:true,
        start: "top -5%",
        end: "top 20%",
        scrub: 2,
    }
})

gsap.to(".content .righty", {
    x: 100,
    duration: 2,
    delay: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page1",
        // markers:true,
        start: "top -5%",
        end: "top 20%",
        scrub: 2,
    }
})

gsap.to("video", {
    width: "100vw",
    duration: 2,
    delay: 2,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page1",
        // markers:true,
        start: "top -30%",
        end: "top 20%",
        scrub: 2,
    }
})

var page2anim = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
    }
})


page2anim.to(".main", {
    backgroundColor: "white",
})

var page4anim = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
    }
})

page4anim.to(".main", {
    backgroundColor: "black",

})


var page2 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        // markers:true,
        start: "top 60%",
        end: "top 20%",
        scrub: 2,
    }
})

page2.from(".page2>h1", {
    rotate: 10,

})


var page3 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page3-img",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
    }
})

page3.to(".page3-left-img", {
    x: 100,

}, "anim")

page3.to(".page3-right-img", {
    x: -100,
}, "anim")


gsap.from(".page3>h1", {
    rotate: 10,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub: 2,
    }
})

