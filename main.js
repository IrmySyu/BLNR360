<<<<<<< HEAD



let x;
let y;
var ax = 0;
var ay = 0;
window.addEventListener('mousemove', function (e) {



});
var timestamp = null;
let lastMouseX;
let lastMouseY;

var a = 0;
window.addEventListener('mousemove', function (e) {
    a++;
    x = e.clientX / window.innerWidth;
    y = e.clientY / window.innerHeight;
    if (a > 200) {
        a = 0;
        timerId();
    }

});
function animate(options) {

    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction от 0 до 1
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        // текущее состояние анимации
        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}
function makeEaseOut(timing) {

    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);

    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce);

let road = 1;
let timerId = () => {

    animate({
        duration: 1000,
        timing: bounceEaseOut,
        draw: function (progress) {
            ax = ax + ((x - ax) * progress);
            ay = ay + ((y - ay) * progress);
        }
    });
    return;

};


// `rotation` is a three.js Euler using radians. `quaternion` also available.


let th;

AFRAME.registerComponent('rotation-reader', {
    tick: function () {
        // `this.el` is the element.
        // `object3D` is the three.js object.
        th = this;
        if (x > 0.7 && th.el.object3D.rotation.y > -3) {

            th.el.object3D.rotation.y = th.el.object3D.rotation.y - 0.005;
        }
        if (x < 0.3 && th.el.object3D.rotation.y < 3) {

            th.el.object3D.rotation.y = th.el.object3D.rotation.y + 0.005;
        }


        th.el.object3D.rotation.x = 1 - 2 * y;
        // `position` is a three.js Vector3.

    }

});
function sayHi() {

    AFRAME.registerComponent('play-video', {
        schema: {
            target: { type: 'selector' },
            src: { type: 'string' },
            on: { default: 'click' },
        },

        multiple: true,

        init: function () {
            var data = this.data;

            this.el.addEventListener(data.on, function () {
                data.target.setAttribute('src', data.src);
                data.target.components.material.material.map.image.play();
            });
        }
    });

    document.querySelector("#image-360").components.material.material.map.image.play();
    document.addEventListener("mousemove", function (event) {
        document.querySelector('.background_page').classList.add('active')
    })

}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log(1);

    setTimeout(sayHi, 3000);
    const iconMenu = document.querySelector('.menu_icon');
    const menuBody = document.querySelector('.menu_body');
    const videoBlock = document.querySelector('.content');
    const MenuItem = menuBody.querySelectorAll('li')
    const pages = document.querySelectorAll('.page');
    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        videoBlock.classList.toggle('active');
    });


    for (let item of MenuItem)

        item.addEventListener('click', () => {
            for (let itemclass of MenuItem) {
                itemclass.classList.remove("active")
            }
            let itemId = item.dataset.id
            item.classList.add('active')
            console.log(itemId);
            Page_active(itemId)


        });
    let Page_active = (id) => {
        for (let page of pages) {
            console.log(id);
            page.classList.remove('active')
            if (page.dataset.id == id) {
                page.classList.add('active')
            }
        }
    }

});

let video = Document.querySelector('.local_video');

video.insertAdjacentHTML("beforeBegin", "<video></video>");

=======
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);let o,r;window.addEventListener("DOMContentLoaded",(function(){}));var i=0,a=0;window.addEventListener("mousemove",(function(e){}));var c=0;window.addEventListener("mousemove",(function(e){c++,o=e.clientX/window.innerWidth,r=e.clientY/window.innerHeight,c>200&&(c=0,d())}));let l=(u=function(e){for(let t=0,n=1;;t+=n,n/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(n,2)},function(e){return 1-u(1-e)});var u;let s,d=()=>{var e,t;e={duration:1e3,timing:l,draw:function(e){i+=(o-i)*e,a+=(r-a)*e}},t=performance.now(),requestAnimationFrame((function n(o){var r=(o-t)/e.duration;r>1&&(r=1);var i=e.timing(r);e.draw(i),r<1&&requestAnimationFrame(n)}))};function f(){AFRAME.registerComponent("play-video",{schema:{target:{type:"selector"},src:{type:"string"},on:{default:"click"}},multiple:!0,init:function(){var e=this.data;this.el.addEventListener(e.on,(function(){e.target.setAttribute("src",e.src),e.target.components.material.material.map.image.play()}))}}),document.querySelector("#image-360").components.material.material.map.image.play(),document.addEventListener("mousemove",(function(e){document.querySelector(".background_page").classList.add("active")}))}AFRAME.registerComponent("rotation-reader",{tick:function(){s=this,o>.7&&s.el.object3D.rotation.y>-3&&(s.el.object3D.rotation.y=s.el.object3D.rotation.y-.005),o<.3&&s.el.object3D.rotation.y<3&&(s.el.object3D.rotation.y=s.el.object3D.rotation.y+.005),s.el.object3D.rotation.x=1-2*r}}),document.addEventListener("DOMContentLoaded",(function(e){console.log(1),setTimeout(f,3e3);const t=document.querySelector(".menu_icon"),n=document.querySelector(".menu_body"),o=document.querySelector(".content"),r=n.querySelectorAll("li"),i=document.querySelectorAll(".page");t.addEventListener("click",()=>{t.classList.toggle("active"),n.classList.toggle("active"),o.classList.toggle("active")});for(let e of r)e.addEventListener("click",()=>{for(let e of r)e.classList.remove("active");let t=e.dataset.id;e.classList.add("active"),console.log(t),a(t)});let a=e=>{for(let t of i)console.log(e),t.classList.remove("active"),t.dataset.id==e&&t.classList.add("active")}}))},function(e,t,n){}]);
//# sourceMappingURL=app.887dda02.js.map
>>>>>>> 531966fec8ecd980fd15c4e5f0203feb6cb92995
