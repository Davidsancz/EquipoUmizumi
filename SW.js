const STATIC_CACHE = "static";

const APP_SHELL = [

    "/",
    "index.html",
    "About.hmtl",
    "Contact.html",
    "Gallery.html",
    "java.html",
    "style.css",
    "function.js",
    "main.js",
    "script1.js",
    "script2.js",
    "awebo.png",
    "lil.jpeg",
    "narco.jpg",
    "pin.jpg",
    "wallpaperflare.com_wallpaper (1).jpg"

];


self.addEventListener("install", (e) => {

    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntill(cacheStatic);

});

self.addEventListener("fecth", (e) => {
    console.log("fetch!", e.request);

    e.responWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );

});

