let chosenVersion = null;

document.getElementById('version--color-os').addEventListener('input', function () {
  chosenVersion = 9;
  document.body.setAttribute('data-version', '9');
  UpdateVersionInfoMessages();
});

document.getElementById('version--realme-ui').addEventListener('input', function () {
  chosenVersion = 10;
  document.body.setAttribute('data-version', '10');
  UpdateVersionInfoMessages();
});

function UpdateVersionInfoMessages() {
  document.querySelectorAll('.gg-c-minor-alert[data-version-message]').forEach(function (n) {
    n.querySelector('.gg-c-minor-alert__title').innerHTML = `You're running Android ${chosenVersion} (${
      chosenVersion === 9 ? 'ColorOS 6' : 'realme UI 1.0'
    })`;
  });
}

// --------------------------------------------------------------

document.getElementById('windows-platform-tools').addEventListener('click', function () {
  window.open('https://dl.google.com/android/repository/platform-tools-latest-windows.zip');
});

document.getElementById('mac-platform-tools').addEventListener('click', function () {
  window.open('https://dl.google.com/android/repository/platform-tools-latest-darwin.zip');
});

document.getElementById('linux-platform-tools').addEventListener('click', function () {
  window.open('https://dl.google.com/android/repository/platform-tools-latest-linux.zip');
});

function randomiseDownloadLink(linkArray) {
  const index = Math.floor(Math.random() * linkArray.length);

  return linkArray[index];
}

// ColorOS China A.15
document.querySelectorAll('.ozip-download--coloros__cn').forEach(function (link) {
  link.setAttribute(
    'href',
    randomiseDownloadLink([
      'https://mega.nz/file/6MQSVaoI#uM-PVn1r570URXfGuJ73HGaWyLDVj9g-w7W7bcSfx4I',
      'https://drive.google.com/file/d/1R7PlVbnmzUwclQR9-XM9McbuYWyMIdva/view?usp=sharing',
    ])
  );
});

// ColorOS Global A.10
document.querySelectorAll('.ozip-download--coloros__global').forEach(function (link) {
  link.setAttribute(
    'href',
    randomiseDownloadLink([
      'https://mega.nz/file/ORRWWSTL#McNOMXRBS8T3wiUuTaiwxFm4jKHfVa6_vgCE8rzDr-w',
      'https://drive.google.com/file/d/1qWv1UsrVocCgMqvK2EbqMO11u34Rve7W/view?usp=sharing',
    ])
  );
});

// realmeme UI China C.25
document.querySelectorAll('.ozip-download--realmemeui__cn').forEach(function (link) {
  link.setAttribute(
    'href',
    randomiseDownloadLink([
      'https://mega.nz/file/aFR2QAaB#TvFkHoraHrxXdIxSEvaZwpZTpLjimV2oC0bTsAq-9II',
      'https://drive.google.com/file/d/1iZG1QP9ix_av9vTD5GgjCgeSywTN9tWb/view?usp=sharing',
    ])
  );
});

// realmeme UI Global C.27
document.querySelectorAll('.ozip-download--realmemeui__global').forEach(function (link) {
  link.setAttribute(
    'href',
    randomiseDownloadLink([
      'https://mega.nz/file/CAB2SYLQ#Q_EXGe1apsUkYLPy_FzVumlI1x6hDPDweAOHHT_LO6U',
      'https://drive.google.com/file/d/1S8WcOvgnLzTxgu6UZ0h2cJyKoQ6s0X7Z/view?usp=sharing',
    ])
  );
});

function ToggleNav() {
  const disableBodyScroll = bodyScrollLock.disableBodyScroll;
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;

  const nav = document.getElementById('contents');

  if (nav.classList.contains('in')) {
    nav.classList.remove('in');
    nav.classList.add('out');
    enableBodyScroll(nav);
  } else {
    nav.classList.remove('out');
    nav.classList.add('in');
    disableBodyScroll(nav);
  }
}

document.getElementById('toggle-contents').addEventListener('click', ToggleNav);

document.querySelectorAll('#contents li a').forEach(function (heading) {
  heading.addEventListener('click', ToggleNav);
});
