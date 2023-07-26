import { modules } from './module.config.js';
import './style.css';
import { importAndInjectModule } from './utils.js';

// Fake app data
const names = ['John', 'Jane', 'Alice', 'Bob', 'Eva', 'Michael', 'Olivia', 'William', 'Sophia', 'David'];

function init() {
  // importing micro frontend apps
  modules.forEach(module => importAndInjectModule(module, names));

  // get the grid container
  const gridContainer = document.querySelector('.grid-container');

  // Create the module elements and append to the grid container
  modules.forEach(module => {
    const div = document.createElement('div');
    div.setAttribute('class', `mf-${module.id} mf-wrapper`);
    gridContainer.appendChild(div);
  });
}

init();

