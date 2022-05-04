(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    gsap.to(".background", 2, {
        width: "100%"
    });
    gsap.from(".header", 1.5, {
        delay: 2.5,
        opacity: 0,
        y: 20
    });
    gsap.from(".socials ul li", 1.5, {
        delay: 2.8,
        opacity: 0,
        x: -30
    }, .08);
    gsap.from(".texts__title", 1.5, {
        delay: 1.6,
        y: "100%",
        opacity: 0
    });
    gsap.from(".texts__subtitle", 1.5, {
        delay: 2,
        y: "100%",
        opacity: 0
    });
    gsap.from(".desc ul li", 1.5, {
        delay: 2,
        opacity: 0,
        y: 20
    }, .1);
    gsap.from(".desc__text", 1.5, {
        delay: 2.3,
        opacity: 0,
        y: 20
    });
    gsap.from(".scrolldown", 1.5, {
        delay: 2.7,
        opacity: 0,
        y: 200
    });
    gsap.from(".footer", 1.5, {
        delay: 3.2,
        opacity: 0,
        y: 30
    });
    gsap.from(".footer__title", 1.5, {
        delay: 3.5,
        opacity: 0,
        x: -20
    });
    window["FLS"] = true;
    isWebp();
})();