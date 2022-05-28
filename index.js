// Debounce can be used in scenarios like search where you do not want to fire request on every keystroke; instead you want to have a cooling period after which to send a request. Write a debounce function that takes in a required callback function, a required delay in milliseconds. Calling `debounce (callback, delay)` should return a new "debounced" version of the callback function, which takes in the same parameters as the callback, and which, when executed, should call the callback after `delay` milliseconds have passed since the last call to this debounced function. For example, repeatedly calling a debounced function which had a delay of 3000ms every second would never call the underlying callback function, because the delay of 3000ms would never elapse since the last call.

export function debounce(callback, delay = 3000) {
    let timerId;
    
    return function(...args) {
        window.clearTimeout(timerId);

        timerId = window.setTimeout(function() { callback(...args) }, delay);
    }
}
