function toggleTheme() {

    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "light") {
        html.setAttribute("data-theme", "dark");
    } else {
        html.setAttribute("data-theme", "light");
    }
}
