document.addEventListener("DOMContentLoaded", function () {
    var includeTargets = document.querySelectorAll("[data-include]");

    includeTargets.forEach(function (target) {
        var source = target.getAttribute("data-include");

        if (!source) {
            return;
        }

        fetch(source)
            .then(function (response) {
                return response.text();
            })
            .then(function (html) {
                target.innerHTML = html;
            });
    });
});
