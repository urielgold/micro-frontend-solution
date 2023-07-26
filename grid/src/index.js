import './style.css';
import { createLoader } from "./Loader";
import { fetchAndCreateTable } from "./Table";

async function component() {
  const container = document.createElement('div');
  const loaderElement = createLoader();
  container.appendChild(loaderElement);

  fetchAndCreateTable().then(tableElement => {
    if (tableElement) {
      // The setTimeout is only for showing the loader and that the other apps are not effected by it.
      setTimeout(() => {
        loaderElement.remove();
        container.appendChild(tableElement);
      }, 1000);
    } else {
      console.log('Unable to create the table.');
    }
  });

  return container;
}

export default {
  component
}