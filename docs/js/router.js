
const router = (event) => {
    let route = event.target.dataset.route;

    if (route === "/") {
        setProductsPage();
    } else if (route === "/basket") {
        setBasketPage();
    } else {
        setNotFoundPage();
    }
};

let root = document.getElementById("root");
let rooteElements = document.querySelectorAll("*[data-route]");
for (let x in rooteElements) {
    rooteElements[x].onclick = router;
}