import Droppable from '../elements/droppable.js';

function createDroppableElement({ template }, container) {
  const item = new Droppable(template);
  item.setAttribute('data-quant', 0);
  container.appendChild(item);
}
export default createDroppableElement;
