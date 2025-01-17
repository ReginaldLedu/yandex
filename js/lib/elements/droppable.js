import wineSVG from '../UITemplates/wine.js';
import milkSVG from '../UITemplates/milk.js';
import jamSVG from '../UITemplates/jam.js';
import cheeseSVG from '../UITemplates/cheese.js';
import meatSVG from '../UITemplates/meat.js';
import chickenSVG from '../UITemplates/chicken.js';
import chipsSVG from '../UITemplates/chips.js';
import pineappleSVG from '../UITemplates/pineapple.js';
import bananaSVG from '../UITemplates/banana.js';
import appleSVG from '../UITemplates/apple.js';
import saladSVG from '../UITemplates/salad.js';
import createDraggableElement from '../env/create-draggable-element.js';

const goodsForShelf1 = [
  { template: wineSVG, price: 160, id: '1qw2er3ty' },
  { template: milkSVG, price: 160, id: '4qw5er6ty' },
  { template: jamSVG, price: 160, id: '7qw8er8ty' },
  { template: cheeseSVG, price: 160, id: '9qw9er9ty' },
];

const goodsForShelf2 = [
  {
    template: meatSVG,
    price: 160,
    id: '56w2ty3op',
  },
  { template: chickenSVG, price: 160, id: '54w2t73op' },
  { template: chipsSVG, price: 160, id: 'uiw2t73op' },
];

const goodsForShelf3 = [
  {
    template: pineappleSVG,
    price: 160,
    id: 'fgh852p0k',
  },
  { template: bananaSVG, price: 160, id: '47h8lkp0k' },
  { template: appleSVG, price: 160, id: '4cxzlkp0k' },
  { template: saladSVG, price: 160, id: '8dtgl9qva' },
];

class Droppable extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
  static observedAttributes = ['data-quant'];
  buttonVisibility() {
    const payButton = this.shadowRoot.getElementById('pay');
    function showButton() {
      payButton.style.opacity = '1';
      payButton.style.visibility = 'visible';
    }
    function hideButton() {
      payButton.style.opacity = '0';
      payButton.style.visibility = 'hidden';
    }
    Number(this.getAttribute('data-quant')) >= 3 ? showButton() : hideButton();
  }
  render() {
    goodsForShelf1.forEach(item =>
      createDraggableElement(item, this.shadowRoot.getElementById('shelf-1'))
    );
    goodsForShelf2.forEach(item =>
      createDraggableElement(item, this.shadowRoot.getElementById('shelf-2'))
    );

    goodsForShelf3.forEach(item =>
      createDraggableElement(item, this.shadowRoot.getElementById('shelf-3'))
    );
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.buttonVisibility();
  }
}

if (!customElements.get('item-droppable')) {
  customElements.define('item-droppable', Droppable);
}
export default Droppable;
