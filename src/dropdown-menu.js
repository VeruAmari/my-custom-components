export default function dropdownMenu(pNode, ...contents) {
  const menu = document.createElement('div');
  menu.style.visibility = 'collapse';

  const parent = pNode;

  // Make menu collapsable on clicking
  parent.onclick = () => {
    const value = menu.style.visibility === 'collapse' ? 'visible' : 'collapse';
    menu.style.visibility = value;
  };
  const title = document.createElement('div');
  title.textContent = 'Menu Title';
  menu.appendChild(title);
  [...contents].forEach((element) => {
    menu.appendChild(element);
  });
  parent.parentNode.appendChild(menu);
}
