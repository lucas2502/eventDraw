const labelEvent = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .label-login {
            color: #3a4042;
            font-size: 16px;
            display: flex;
            aling-content: space-between;   
        }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = content => {
        module._style();

        return `
            <label class="label-login">${content}</labe>
        `;
    };

    return {
        render: module.render
    };
    
})();