const login = (() => {
    const $root = document.querySelector("#root");

    const $logoElo = logoElo.render();
    const $formLogin = formLogin.render();

    $root.insertAdjacentHTML("beforeend", $logoElo);
    $root.insertAdjacentHTML("beforeend", $formLogin);
});