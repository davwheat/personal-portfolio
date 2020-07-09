function debounce(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout;

  // Calling debounce returns a new anonymous function
  return function () {
    // reference the context and args for the setTimeout function
    var context = this,
      args = arguments;

    // Should the function be called now? If immediate is true
    //   and not already in a timeout then the answer is: Yes
    var callNow = immediate && !timeout;

    // This is the basic debounce behaviour where you can call this
    //   function several times, but it will only execute once
    //   [before or after imposing a delay].
    //   Each time the returned function is called, the timer starts over.
    clearTimeout(timeout);

    // Set the new timeout
    timeout = setTimeout(function () {
      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // Check if the function already ran with the immediate flag
      if (!immediate) {
        // Call the original function with apply
        // apply lets you define the 'this' object as well as the arguments
        //    (both captured before setTimeout)
        func.apply(context, args);
      }
    }, wait);

    // Immediate mode and no wait timer? Execute the function..
    if (callNow) func.apply(context, args);
  };
}

document.querySelector('#ug-button > span').addEventListener('input', debounce(generateButton, 1000));

function generateButton() {
  const button = document.getElementById('ug-button');
  button.classList.add('generated');

  html2canvas(button, {
    backgroundColor: null,
    useCORS: true,
    scale: 1,
  }).then(function (canvas) {
    canvas.id = 'ug-btn-canvas';

    button.classList.remove('generated');

    document.querySelector('#ug-button--preview').innerHTML = '';
    document.querySelector('#ug-button--preview').appendChild(canvas);
  });
}

document.querySelectorAll('.gg-c-alert__close').forEach(function (n) {
  n.addEventListener('click', function (e) {
    const alertParent = n.parentNode.parentNode.parentElement;

    closeAlert(alertParent);
  });
});

document.querySelectorAll('[data-open-alert]').forEach(function (n) {
  n.addEventListener('click', function (e) {
    openAlertWithID(n.getAttribute('data-open-alert'));
  });
});

document.getElementById('button-choice--primary').addEventListener('input', function (e) {
  if (e.target.checked) {
    document.getElementById('ug-button').classList.add('gg-c-btn--primary');
  }

  generateButton();
});

document.getElementById('button-choice--secondary').addEventListener('input', function (e) {
  if (e.target.checked) {
    document.getElementById('ug-button').classList.remove('gg-c-btn--primary');
  }

  generateButton();
});

setTimeout(generateButton, 200);
