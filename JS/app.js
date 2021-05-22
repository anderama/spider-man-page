document.addEventListener('DOMContentLoaded', () => {
    
    let tl1 = new TimelineMax();

    tl1.fromTo('.bg-loader', 1,
    {width: '100%'},
    {width: '0%', delay: 5, ease: Expo.easeInOut})

    tl1.fromTo('.bg-video', 2,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    tl1.fromTo('.logo', 0.7,
    {y: 50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    tl1.fromTo('.nav-list', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.nav-social', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.bx', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.item-1', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.item-2', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.item-3', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.item-4', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.item-5', 0.7, 
    { y: 50, opacity: 0,},
    { y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
    }, '-=0.5')

    tl1.fromTo('.bg-lines', 7, 
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Power3.easeInOut
    }, '-=5');
})