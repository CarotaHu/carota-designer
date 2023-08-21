

let allEvent;

// 监听设计页消息
window.addEventListener('message', function (event) {
    console.log('打开')
    allEvent = event;
    let ev = event.data.event;
    let modal = event.data.modal;
    let data = event.data.data;
    console.log('打开')
    let modalObj = JSON.parse(modal)
    setTimeout(() =>
    {
        modalObj.hide
        console.log('关闭')
    },1000)

});

// drag-form-component.js

class DragFormComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
      <link rel="stylesheet" href="../../../node_modules/bootstrap/dist/css/bootstrap.css">

      <div class="modal-header">
          <h1 class="modal-title fs-5">
              <slot name="title">Default Title</slot>
          </h1>
      </div>
      <div class="modal-body">
          ...
      </div>

      <button id="submit-button">Submit</button>
    `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    addEventListeners() {
        const submitButton = this.shadowRoot.getElementById('submit-button');
        submitButton.addEventListener('click', () => {
            console.log('submit');
            // 发送返回值
            allEvent.source.postMessage('你好', allEvent.origin);
        });
    }
}

customElements.define('drag-form', DragFormComponent);
