// import {LitElement, css, html} from 'lit';
//import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {LitElement, css, html} from './resources/lit-core.min.js';

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: limegreen;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'Salamooon';
  }

  // Render the UI as a function of component state
  render() {
    return html`<h1>Alaikoom, ${this.name}!</h1>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);
