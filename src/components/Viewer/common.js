
export const SEGMENT_DURATION = 60;

export function once(el, event, fn) {
    el.addEventListener(event, function handler(e) {
        el.removeEventListener(event, handler);
        fn(e);
    });
}
