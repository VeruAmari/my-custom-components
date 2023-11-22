/* import hamburgerImage from './hamburger-2-svgrepo-com.svg';

document.querySelectorAll('.hamburger').forEach((element) => {
  element.setAttribute('src', hamburgerImage);
});
*/

export default function dropdown(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    console.log(element);
    element.setAttribute('tabindex', 0);

    const children = Array.from(element.children);
    children.forEach((child) => {
      // child.style.height = 0;
      if (child !== element.firstElementChild) {
        child.setAttribute('style', 'visibility: collapse');
      }
      // child.style.visibility = 'collapse';
    });

    element.addEventListener('focus', () => {
      children.forEach((child) => {
        // child.style.height = height;
        if (child !== element.firstElementChild) {
          child.setAttribute('style', 'visibility: visible');
        }
        // child.style.visibility = 'visible';
      });
    });

    element.addEventListener('focusout', () => {
      children.forEach((child) => {
        // child.style.height = 0;
        if (child !== element.firstElementChild) {
          child.setAttribute('style', 'visibility: collapse');
        }
        //  child.style.visibility = 'collapse';
      });
    });
  });
}

dropdown('.dropdown');
