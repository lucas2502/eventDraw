const formLogin = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .login {
            width: 30%;
            height: 30%;
            background-color: #fff;
        }

        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module._children = () => {
        const $labelEmail = labelEvent.render("E-mail");
        const $inputEmail = inputEvent.render({
            id: "email",
            placeholder: "nome.sobrenome@seuemail.com.br",
            type: "email"
        });
        const $labelPass = labelEvent.render("Senha");
        const $inputPass = inputEvent.render({
            id: "password",
            placeholder: "*******",
            type: "password"
        });


        return `
            ${$labelEmail}
            ${$inputEmail}

            ${$labelPass}
            ${$inputPass}

        `;
    };

    module.render = () => {
        module._style();

        return `
            <form class="login" action="" method="POST">${module._children()}</form>
        `;
    };

    return {
        render: module.render
    }

})();