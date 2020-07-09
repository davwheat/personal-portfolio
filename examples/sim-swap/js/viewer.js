const pageData = {
  '#logged-out': {
    htmlPath: '/examples/sim-swap/logged-out.html',
    title: 'Logged out',
    subtitle: "Activation page when you're not logged into an account.",
  },
};

const title = document.getElementById('page-title');
const subtitle = document.getElementById('page-description');
const frame = document.getElementById('viewer-frame');
const link = document.getElementById('viewer-link');

if (!Object.keys(pageData).includes(window.location.hash)) {
  title.innerText = 'Oops!';
  subtitle.innerText = `Something went wrong. Click back in the top-right of this page and try again. (Error: "${window.location.hash}" is not a valid page.)`;
  frame.classList.add('hidden');
  link.classList.add('hidden');
} else {
  const data = pageData[window.location.hash];

  title.innerText = data.title;
  subtitle.innerText = data.subtitle;
  frame.src = data.htmlPath;
  link.setAttribute('href', data.htmlPath);
}
