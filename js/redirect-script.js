(function () {
  if (window.location.host === 'gg-help.web.app' || window.location.host === 'gg-help.firebaseapp.com') {
    // Hide page until new URL loads
    const hider = document.createElement('div');
    hider.style.display = 'flex';
    hider.style.alignItems = 'center';
    hider.style.justifyContent = 'center';
    hider.style.flexDirection = 'column';

    hider.style.position = 'fixed';
    hider.style.boxSizing = 'border-box';
    hider.style.top = '0';
    hider.style.bottom = '0';
    hider.style.left = '0';
    hider.style.right = '0';
    hider.style.zIndex = '9999999';

    hider.style.paddingLeft = '16px';
    hider.style.paddingRight = '16px';

    hider.style.backgroundColor = '#F5F5F5';
    hider.style.border = '4px solid #000';

    const NewURL =
      'https://giffgaff.davwheat.dev' + window.location.pathname + window.location.search + window.location.search + window.location.hash;

    hider.innerHTML =
      '<span class="gg-c-loading-icon gg-c-loading-icon--center" style="height:48px;width:48px;border-width:4px;margin-bottom:24px"></span><p class="gg-u-text-shout gg-u-text-center">Redirecting to new website...</p><p class="gg-u-text-speak gg-u-mt-small"><a href="' +
      NewURL +
      '" class="gg-u-link gg-u-link--arrow">Click here if you\'re not redirected</a></p>';

    const checker = setInterval(function () {
      if (document.body) {
        clearInterval(checker);
        document.body.appendChild(hider);
        document.body.style.overflow = 'hidden';
      }
    }, 100);

    // Redirect to new domain
    window.location.replace(NewURL);
  }
})();
