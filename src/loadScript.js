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