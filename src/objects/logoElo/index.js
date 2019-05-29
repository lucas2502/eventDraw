const logoElo = (function() {
    const module = {};
  
    module._style = () => {
      const $head = document.querySelector("head");
      const $style = document.createElement("style");
  
      $style.textContent = `
        .logo-elo {
          background-color: white;
          display: inline-block;
          width: 175px;
          border: solid 40px white;
          border-radius: 50%;
        }
      `;
  
      $head.insertAdjacentElement("beforeend", $style);
    };
  
    module.render = () => {
      module._style();
  
      return `
        <figure class="logo-elo">
          
        </figure>
      `;
    };
  
    return {
      render: module.render
    };
  })();