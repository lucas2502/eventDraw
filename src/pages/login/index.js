const login = (() => {
    const $root = document.querySelector("#root");

    const $formLogin = formLogin.render();

    $root.insertAdjacentHTML("beforeend", $formLogin);
});