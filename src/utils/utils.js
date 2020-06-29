import gsap from 'gsap'

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export function once(fn, context) {
    var result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

export function poll(fn, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    var checkCondition = function (resolve, reject) {
        // If the condition is met, we're done! 
        var result = fn();
        if (result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments));
        }
    };

    return new Promise(checkCondition);
}


export function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

export function show(el, options) {
    return gsap.to(el, {
        duration: .2,
        autoAlpha: 1,
        ...Object.assign([], options)
    })
}

export function zoomElement(el, options = {}) {
    show(el, {
        scale: 3,
        ...Object.assign([], options)
    })
}

export function hide(el, options) {
    // gsap.set(el, { ...Object.assign([], options) })
    gsap.set(el, { display: "none " })
}

export const wiggleProp = (element, prop, min, max) => {
    const duration = Math.random() * (2.4 - 1.2) + 1.2;

    let tweenProps = {
        ease: "power2.inOut",
        onComplete: wiggleProp,
        onCompleteParams: [element, prop, min, max]
    };
    tweenProps[prop] = Math.random() * (max - min) + min;

    gsap.to(element, duration, tweenProps);
}


export function wiggle(element) {
    document.querySelectorAll(String(element)).forEach((el) => {
        // this.wiggleProp(el, 'scale', 0.93, 1);
        wiggleProp(el, 'rotation', -5, 5);
        wiggleProp(el, 'x', -3, 3);
        wiggleProp(el, 'y', -3, 3);
    })
}
