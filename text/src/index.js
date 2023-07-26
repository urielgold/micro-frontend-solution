import './style.css';
import { textContent } from './content';

function component() {
  const element = document.createElement('div');

  element.innerHTML = textContent;
  element.classList.add('text-app');

  return element;
}

export default {
  component,
}