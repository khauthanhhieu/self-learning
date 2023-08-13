const handleSubmit = () => console.log("sibmit");

const initApp = () => {
    const button = document.querySelector("button");    
    button.addEventListener("click", throttle(handleSubmit, 500));
}

document.addEventListener("DOMContentLoaded", initApp);

const throttle = (fn, delay) => {
    delay = delay || 0;
    let lastTimestamp = 0;

    return () => {
        const now = new Date().getTime();
        if (now - lastTimestamp < delay) {
            return;
        }

        lastTimestamp = now;
        fn();
    }
}

const debounce = (fn, delay) => {
    delay = delay || 0;

    let timeoutId = null;

    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        timeoutId = setTimeout(fn, delay);
    }
}