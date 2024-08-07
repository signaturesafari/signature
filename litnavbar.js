//header.js
import { LitElement, html, css } from 'https://unpkg.com/lit-element';
import  'https://unpkg.com/lit-element-bootstrap@1.0.0-alpha.10/lit-element-bootstrap';

export class Header extends LitElement{
    constructor() {
        super();
    }
    render(){
        return html`
       
         <div>A simple primary alert—check it out!
          salmin
         </div>
       
        `;
    }
}
customElements.define('header-element', Header);