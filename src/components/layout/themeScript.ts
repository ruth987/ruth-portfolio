/**
 * Runs in <head> before first paint. Applies a stored theme choice so there
 * is no flash; without one, CSS follows prefers-color-scheme.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
