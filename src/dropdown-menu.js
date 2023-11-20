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
export default function applyDropdown(selector) {
  document.querySelectorAll(selector).forEach((element)=>{
    const dropdown = element;
    dropdown.onclick = dropdown.classlist.toggle("hidden");
  
  });
};