import Draggable from '../elements/draggable.js';

function createDraggableElement({ template, price, id }, container) {
  const item = new Draggable(template, price, id);
  container.appendChild(item); 
}
export default createDraggableElement;
