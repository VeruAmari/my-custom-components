export default function carousell(selector, wSize, hSize) {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute('style', 'position:relative');
    element.firstElementChild.setAttribute('style', 'position:relative;');
    console.log(element);
    let position = 0;
    const moveDistance = wSize;
    const maxIndex = element.firstElementChild.children.length - 1;
    const locationByIndex = [];
    for (let i = 0; i <= maxIndex; i += 1) {
      locationByIndex.push(moveDistance * -i);
    }

    function highlightDot(currentDotPosition, nextDotPosition) {
      const currentDotId = locationByIndex.indexOf(currentDotPosition);
      const nextDotId = locationByIndex.indexOf(nextDotPosition);
      const current = document.getElementById(`dot${currentDotId}`);
      const next = document.getElementById(`dot${nextDotId}`);

      current.classList.toggle('currentSlide');
      next.classList.toggle('currentSlide');
    }

    // Move one slide to the right
    function moveRight() {
      const prevPosition = position;

      if (position > -moveDistance * maxIndex) {
        position -= moveDistance;
      } else {
        position = 0;
      }

      element.firstElementChild.setAttribute(
        'style',
        `position:relative;left:${position}px;`,
      );

      highlightDot(prevPosition, position);
    }
    // Move one slide to the left
    function moveLeft() {
      const prevPosition = position;
      if (position < 0) {
        position += moveDistance;
      } else {
        position = -moveDistance * maxIndex;
      }
      element.firstElementChild.setAttribute(
        'style',
        `position:relative;left:${position}px;`,
      );
      highlightDot(prevPosition, position);
    }

    // Move to a specific slide
    function snapToImage(index) {
      const prevPosition = position;
      position = -moveDistance * index;
      element.firstElementChild.setAttribute(
        'style',
        `position:relative;left:${position}px;`,
      );

      highlightDot(prevPosition, position);
    }
    // Start autoadvance intervals
    let intervalID = setInterval(moveRight, 5000);
    function restartInterval() {
      clearInterval(intervalID);
      intervalID = setInterval(moveRight, 5000);
    }

    // Make carousell arrows for horizontal sliding of images //
    function makeArrows(direction) {
      const move = document.createElement('button');

      if (direction === 'left') {
        move.setAttribute(
          'style',
          `;position:absolute; height: ${hSize}px; width: ${Math.floor(
            wSize / 12,
          )}px;top:0px;`,
        );
        move.textContent = '<';
        move.classList.add('move', 'left');

        move.addEventListener('click', () => {
          moveLeft();
          restartInterval();
        });
      }

      if (direction === 'right') {
        move.setAttribute(
          'style',
          `position:absolute; height: ${hSize}px; width: ${Math.floor(
            wSize / 12,
          )}px; left:${moveDistance - Math.floor(wSize / 12)}px;top:0px;`,
        );
        move.textContent = '>';
        move.classList.add('move', 'right');

        move.addEventListener('click', () => {
          moveRight();
          restartInterval();
        });
      }

      return move;
    }

    function makeDots() {
      const container = document.createElement('div');
      container.setAttribute(
        'style',
        `;position:absolute; height: ${Math.floor(
          hSize / 10,
        )}px; width: ${moveDistance}px;top:${Math.floor(hSize - hSize / 8)}px;`,
      );
      container.classList.add('dots-container');
      for (let i = 0; i <= maxIndex; i += 1) {
        const dot = document.createElement('button');
        dot.classList.add('dots');
        dot.setAttribute('id', `dot${i}`);
        if (i === 0) {
          dot.classList.toggle('currentSlide');
        }
        dot.addEventListener('click', () => {
          snapToImage(i);
          restartInterval();
        });

        container.appendChild(dot);
      }
      return container;
    }
    element.appendChild(makeArrows('left'));
    element.appendChild(makeArrows('right'));
    element.appendChild(makeDots());
  });
}

/* Pseudocode:

Need to create a reusable JS function that moves focus to a specific IMG in the carousell.
This function can then be invoked to both JUMP to a certain image when clicking on some "little circles UI" AND to simply "go to next/previous" image when clicking some "next/previous arrow UI element"

I need to apply "position: relative" to the Div containing the images, and offset is the property I can use to move the div around.
*/

carousell('.carousell', 300, 200);
