import './style.css';
import dropdownMenu from './dropdown-menu';

const markup = `
<h1>Webpack + ESLint + Prettier</h1>
`;

const h1 = new DOMParser()
  .parseFromString(markup, 'text/html')
  .querySelector('h1');

document.body.appendChild(h1);
dropdownMenu(h1);
