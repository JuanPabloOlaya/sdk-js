import { join } from 'lodash';

function component() {
  const element = document.createElement("div");

  element.innerHTML = join(["Hello", "Webpack"], " ");

  return element;
}

document.body.appendChild(component());
