import './style.css';

function component(users) {
  const list = document.createElement('ul');

  (users || []).forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    list.appendChild(listItem);
  });

  return list;
}

export default {
  component
}