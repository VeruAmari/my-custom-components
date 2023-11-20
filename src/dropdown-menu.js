/* eslint-disable no-param-reassign */
/*
function dropdownMenu(title, pNode, ...contents) {
  const menuContainer = document.createElement('div');
  menuContainer.style.visibility = 'collapse';

  const parent = pNode;

  // Make menuContainer collapsable on clicking
  parent.onclick = () => {
    const value =
      menuContainer.style.visibility === 'collapse' ? 'visible' : 'collapse';
    menuContainer.style.visibility = value;
  };
  const container = document.createElement('div');
  container.textContent = title;
  menuContainer.appendChild(container);
  [...contents].forEach((element) => {
    element.classlist.add('dropdown-item');
    menuContainer.appendChild(element);
  });
  parent.parentNode.appendChild(menuContainer);
}
*/

export default function applyDropdown(selector, height) {
  document.querySelectorAll(selector).forEach((element) => {
    console.log(element);
    Array.from(element.children).forEach((child) => {
      child.style.height = 0;
      child.style.visibility = 'hidden';
    });
    element.onmouseover = () => {
      Array.from(element.children).forEach((child) => {
        child.style.height = height;
        child.style.visibility = 'visible';
      });
    };
    element.onmouseout = () => {
      Array.from(element.children).forEach((child) => {
        child.style.height = 0;
        child.style.visibility = 'hidden';
      });
    };
  });
}
