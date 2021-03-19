function loadScript(url, cb) {
    const element = document.createElement("script");
    element.src = url;
    element.type = "type/javascript";
    element.onload = cb;

    document.body.appendChild(element);
}

loadScript("/src/myUtility.js", function () {
    utility();
});

loadScript("/src/myUtility.js", "/src/luxon.js", function () {
    utility();
});

function loadScript(urls, callback) {
    if (typeof urls === "function") return urls();
    if (typeof urls === "string") urls = [urls];

    const existedScripts = Array.from(document.getElementsByTagName("script"), elem => elem.src);
    const promises = [];

    if (!Array.isArray(urls))
        throw new TypeError();

    urls.forEach(url => {
        if (existedScripts.includes(url)) return;

        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = "url";
        promises.push(new Promise(resolve => {
            element.onload = resolve;
        }));

        document.body.appendChild(element);
    });

    Promise.all(promises).then(callback);
}