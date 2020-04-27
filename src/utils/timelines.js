import gsap from 'gsap';

    export const down = 250,
        up = -1 * down,
        exit = .195,
        entry = 0.3,
        index = 0,
        illuTweenDuration = 1,
        transitionDelay = .225

    export let interpolateCoords = (ar, index = 0, progress = 0) => {
        if (index === 0) return null
        return gsap.utils.interpolate(ar[index], ar[index - 1], progress);
    }

    // ___________ANIMATIONS________________//
    // Animer l'entree des chevrons
    export let chevronsEntry = () => {
        index !== 4 && gsap.fromTo("#chevron_bottom", {
            duration: entry,
            autoAlpha: 0,
            y: -50,
        }, {
            autoAlpha: 1,
            y: 0,
            onStart: () => {
                index !== 0 && gsap.fromTo(".chevronContainer", {
                    duration: entry,
                    autoAlpha: 0,
                    y: 50
                }, {
                    autoAlpha: 1,
                    y: 0,
                });
            },
        }).delay(transitionDelay*2);

        index === 4 && gsap.fromTo("#chevron_top", {
            duration: entry,
            autoAlpha: 0,
            y: -up,
        }, {
            autoAlpha: 1,
            y: 0,
        });
    };

    // Animer la sortie des chevrons
    export let chevronsExit = () => {
        index !== 4 && gsap.to("#chevron_bottom", {
            y: 50,
            autoAlpha: 0,
            duration: exit,
            onStart: () => {
                index !== 0 && gsap.fromTo(".chevronContainer", {
                    duration: exit,
                    autoAlpha: 1,
                    y: 0
                }, {
                    autoAlpha: 0,
                    y: -50,
                });
            },
        });

        index === 4 && gsap.fromTo("#chevron_top", {
            autoAlpha: 1,
            y: 0,
        }, {
            duration: entry,
            autoAlpha: 0,
            y: up,
        });
    };

    export let chevronsBobbing = gsap.timeline({
        defaults: {
            duration: .8, 
            ease: "power2.inOut",
            paused: false,
            yoyo: true,
            repeat: -1
        }
    });

    export let animChevron = (el, dir, dist, paused=false) => {
        gsap.from(el, {
            [dir]: dist,
            duration: .7,
            repeat: -1,
                yoyo: true,
                paused: paused
        });
    }
  
    // Animer le fadeout de slide text
    export let fadeOutText = (direction) => {
        gsap.to('.slide.text', {
            autoAlpha: 0,
            y: direction/2,
            duration: exit,
        });
    };

    // Animer le fade in de slide text
    export let fadeInText = (direction) => {
        gsap.fromTo('.slide.text', {
            duration: entry,
            autoAlpha: 0,
            y: direction,
        }, {
            autoAlpha: 1,
                y: 0,
        }).delay(transitionDelay);
    };

