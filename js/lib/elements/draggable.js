import createDraggableElement from '../env/create-draggable-element.js';

class Draggable extends HTMLElement {
  constructor(template, price, id) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(template.content.cloneNode(true));
    this.price = price;
    this.id = id;
    this.template = template;
  }
  render() {
    const root = this.getRootNode();
    if (root instanceof ShadowRoot) {
      const draggableItem = this;
      const parentNode = draggableItem.parentNode;
      const draggableItemPrice = this.price;
      const draggableItemId = this.id;
      const draggableItemTemplate = this.template;
      function startTouchMove(event) {
        const touch = event.touches[0];
        const shiftX =
          touch.clientX - draggableItem.getBoundingClientRect().left;
        const shiftY =
          touch.clientY - draggableItem.getBoundingClientRect().top;
        draggableItem.style.position = 'absolute';
        draggableItem.style.cursor = 'grabbing';
        draggableItem.style.zIndex = 1000;
        document.body.append(draggableItem);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
          draggableItem.style.left = pageX - shiftX + 'px';
          draggableItem.style.top = pageY - shiftY + 'px';
        }

        function onTouchMove(event) {
          let touch = event.targetTouches[0];
          moveAt(touch.pageX, touch.pageY);
        }

        // document.addEventListener('touchmove', event => {
        //   onTouchMove(event);
        //   event.preventDefault();
        // });
        draggableItem.addEventListener('touchmove', event => {
          onTouchMove(event);
          event.preventDefault();
        });
        function endMove(event) {
          const touch = event.changedTouches[0];
          console.log(touch);
          const parent = root.host;
          const cart = parent.shadowRoot.getElementById('cart');
          const cartTop = cart.getBoundingClientRect().top + window.scrollY;
          const cartBottom =
            cart.getBoundingClientRect().bottom + window.scrollY;
          const cartLeft = cart.getBoundingClientRect().left + window.scrollX;
          const cartRight = cart.getBoundingClientRect().right + window.scrollX;

          if (
            touch.pageY > cartTop &&
            touch.clientY < cartBottom &&
            touch.pageX > cartLeft &&
            touch.pageX < cartRight
          ) {
            // document.removeEventListener('touchmove', event => {
            //   onTouchMove(event);
            //   event.preventDefault();
            // });
            draggableItem.removeEventListener('touchmove', event => {
              onTouchMove(event);
              event.preventDefault();
            });
            const itemInCart = document.createElement('div');
            itemInCart.setAttribute('data-price', draggableItemPrice);
            itemInCart.setAttribute('data-id', draggableItemId);
            cart.appendChild(itemInCart);
            parent.dataset.quant = Array.from(cart.children).length;
            draggableItem.style.cursor = 'grab';
            draggableItem.style.zIndex = 0;
          } else {
            createDraggableElement(
              {
                template: draggableItemTemplate,
                price: draggableItemPrice,
                id: draggableItemId,
              },
              parentNode
            );
            draggableItem.remove();
            draggableItem.removeEventListener('touchmove', onTouchMove);
          }
        }

        draggableItem.addEventListener('touchend', event => {
          endMove(event);
          // event.preventDefault();
        });
        // document.addEventListener('touchend', event => {
        //   endMove(event);
        //   // event.preventDefault();
        // });
      }
      draggableItem.addEventListener('touchstart', event => {
        startTouchMove(event);
        event.preventDefault();
      });
      function startMove(event) {
        const shiftX =
          event.clientX - draggableItem.getBoundingClientRect().left;
        const shiftY =
          event.clientY - draggableItem.getBoundingClientRect().top;
        draggableItem.style.position = 'absolute';
        draggableItem.style.cursor = 'grabbing';
        draggableItem.style.zIndex = 1000;
        document.body.append(draggableItem);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
          draggableItem.style.left = pageX - shiftX + 'px';
          draggableItem.style.top = pageY - shiftY + 'px';
        }

        function onTouchMove(event) {
          let touch = event.targetTouches[0];
          moveAt(touch.pageX, touch.pageY);
          event.preventDefault();
        }
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        function endMove(event) {
          const parent = root.host;
          const cart = parent.shadowRoot.getElementById('cart');
          const cartTop = cart.getBoundingClientRect().top + window.scrollY;
          const cartBottom =
            cart.getBoundingClientRect().bottom + window.scrollY;
          const cartLeft = cart.getBoundingClientRect().left + window.scrollX;
          const cartRight = cart.getBoundingClientRect().right + window.scrollX;
          if (
            event.pageY > cartTop &&
            event.clientY < cartBottom &&
            event.pageX > cartLeft &&
            event.pageX < cartRight
          ) {
            document.removeEventListener('mousemove', onMouseMove);

            const itemInCart = document.createElement('div');
            itemInCart.setAttribute('data-price', draggableItemPrice);
            itemInCart.setAttribute('data-id', draggableItemId);
            cart.appendChild(itemInCart);
            parent.dataset.quant = Array.from(cart.children).length;
            draggableItem.style.cursor = 'grab';
            draggableItem.style.zIndex = 0;
          } else {
            createDraggableElement(
              {
                template: draggableItemTemplate,
                price: draggableItemPrice,
                id: draggableItemId,
              },
              parentNode
            );
            draggableItem.remove();
            document.removeEventListener('mousemove', onMouseMove);
          }
        }
        draggableItem.addEventListener('mouseup', endMove);
      }
      function dragStart() {
        return false;
      }
      draggableItem.addEventListener('mousedown', startMove);

      draggableItem.addEventListener('dragstart', dragStart);
    }
  }
  connectedCallback() {
    this.render();
  }
}

if (!customElements.get('item-draggable')) {
  customElements.define('item-draggable', Draggable);
}
export default Draggable;
