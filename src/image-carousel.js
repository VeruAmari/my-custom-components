export default function carousell(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    console.log(element);
  });
}

/* Pseudocode:

Need to create a reusable JS function that moves focus to a specific IMG in the carousell.
This function can then be invoked to both JUMP to a certain image when clicking on some "little circles UI" AND to simply "go to next/previous" image when clicking some "next/previous arrow UI element"
*/
