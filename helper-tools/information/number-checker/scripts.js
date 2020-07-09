const specialNumbers = {
  '999': 'the Emergency Services',
  '112': 'the Emergency Services',
  '911': 'the Emergency Services',
  '01189998819991197253': 'an Easter Egg',
  '101': 'the Police non-emergency',
  '111': 'the NHS non-emergency',
  '105': 'the Powercut emergency',
  '43430': 'a giffgaff member services',
  '43431': 'a giffgaff member services',
  '123': 'the talking clock',
  '118118': 'a Directory Enquiries',
};

const normMinsPrice = '25p per minute';
const normTextsPrice = '10p per text';

const phoneCallSvg = `<svg class="gg-u-icon gg-u-icon--medium gg-u-icon--inline" viewBox="0 0 24 24"><path d="M15.6 13.6c-.2-.2-.6-.2-.9 0l-1.6 1.3c-.9-1.6-2-3.1-3.1-4.6l-.4-.5h.1c.9-.4 1.8-1 2.6-1.6.3-.2.4-.6.2-.8-.6-1.4-1.2-3.6-2.5-4.3-1.9-1-4.2 1.4-5.4 2.7-.2.2-.4.5-.3.8a24 24 0 004.2 9.3c1.2 1.9 3.1 5.3 5.6 5.4 1.2.1 3.3-1.4 4.2-2.3 2-2-1.3-4.2-2.7-5.4zm-.6 1zm.4 4.7c-1.4.9-1.6.8-3.2-.7-3.2-3-5.4-7.8-6.6-12 1-1 2.8-2.8 4-2.1.7.4 1 2.1 1.5 2.7l.1.2-.6.3c-.7.4-1.5.8-2.1 1.3-.3.2-.4.5-.3.8l4.1 6.3c.2.3.6.4.9.2l.1-.1c.5-.4 1.1-1.2 1.8-1.5l.3.3c.3.5 1 .8 1.4 1.3 1.2 2.1 0 2.2-1.4 3z"/><path d="M14.2 8.9c.8.3 1.4.8 1.7 1.6.3.8 1.5.4 1.2-.3a4 4 0 00-2.5-2.6c-.8-.2-1.1 1-.4 1.3zm.9-2.4c1.5.1 2.7 1.2 3 2.7.1.8 1.3.5 1.2-.3-.4-2-2.1-3.5-4.2-3.6-.8 0-.8 1.2 0 1.2z"/></svg>`;
const textSvg = `<svg class="gg-u-icon gg-u-icon--medium gg-u-icon--inline" viewBox="0 0 24 24"><path d="M6.3 8.7l11.5.1c.3 0 .6-.3.6-.6s-.3-.6-.6-.6L6.3 7.5c-.3 0-.6.3-.6.6-.1.4.2.6.6.6zm0 2.6l11.5.1c.3 0 .6-.3.6-.6s-.3-.6-.6-.6c-4-.2-7.5-.2-11.5-.2-.3 0-.6.3-.6.6s.2.7.6.7zm0 2.4l11.5.1c.3 0 .6-.3.6-.6s-.3-.6-.6-.6l-11.5-.1c-.4 0-.6.3-.6.6-.1.4.2.6.6.6z"/><path d="M21.2 13.2l-.1-2.1-.2-4.3c-.2-1.2-.4-2.1-1.8-2.5L18 4.1l-.7-.1h-.8c-2.5.4-4.9 0-7.3.1-1.6.1-3.4 0-4.9.7-.5.1-1 .5-1.2 1.5-.7 2.4-.3 4.8-.3 7.2a7 7 0 00.4 3.2c.3.4.8.7 1.3.7.4 1 .1 2.1.2 3.6 0 .3.3.5.6.5l.4-.2a6.1 6.1 0 014.3-3.8h8.5a2 2 0 001.3-.4 2 2 0 001.1-1.6c.2-.7.3-1.5.3-2.3zm-1.5 2.1c-.3.7-.9.8-1.5 1h-4.3c-3.7-.2-6.1.2-7.9 2.6l.1-1.6c.1-.5-.2-.9-.6-1.1l-.7-.2c-.4-.1-.6-.5-.7-.8-.4-1 0-2.3-.2-3.5-.2-1.6-.4-3.5.5-5 1.1-1.8 7.8-1.1 10-1.1 1.1 0 4.4-.5 5.1.5l.1.4c.2.7.3 1.5.2 2.2 0 .1.1.7 0 .8l.1 3.3a6 6 0 010 1.9l-.2.6z"/></svg>`;
const goodybagInclusiveSvg = `<svg class="gg-u-icon gg-u-icon--medium gg-u-icon--inline" viewBox="0 0 24 24"><path d="M21.75 6.3A4.61 4.61 0 0120 6.08c-.43-.22-.32-1.19-.86-2.16C18.47 2.73 18.36 2 17 1.65c-3-.54-4.69 1.35-4.9 4.43 0 .22-.11.32-.33.32h-1.44a.62.62 0 00-.65.65v5.38a10.68 10.68 0 00-1.6 0 6 6 0 00.25-1 3.62 3.62 0 00-1.08-3.28c-.8-.73-2-1-2.68.14-.39.66 0 1.34 0 2a2.31 2.31 0 01-1.86 2.3c-.94.21-.54 1.66.4 1.44a3.62 3.62 0 002.55-2A4.54 4.54 0 006 10.15C6 9.83 5.67 9 6 9.08c1 .32.91 1.86.73 2.61-.13.52-.38 1-.55 1.46s.33 1 .82.9a.7.7 0 00.25 0A7.32 7.32 0 018.61 14a3.35 3.35 0 01.71-.06h.36l.54-.05h.46a.59.59 0 01.2 0 .5.5 0 01.1 1 6.64 6.64 0 01-.87.16.58.58 0 000 .18.85.85 0 00.27.65 1.66 1.66 0 001.12.15.45.45 0 01.45.63 1.92 1.92 0 01-.21.23l-.07.09a.34.34 0 01-.17.05 3.43 3.43 0 01-1.15-.09.78.78 0 00.16.91h.76a.5.5 0 010 1l-.92-.05a.77.77 0 00-.13.51.13.13 0 000 .06h.07a5.62 5.62 0 01.41.44.53.53 0 01.07.83.55.55 0 01-.52.28 39.45 39.45 0 01-5-.37.59.59 0 01-.2-.07c-1-.06-2-.12-2.95-.2s-1 1.43 0 1.5c2.45.18 4.9.34 7.36.37a3.8 3.8 0 00.65-.1 1.93 1.93 0 001.61-.68 1.48 1.48 0 00.28-1.11 1.43 1.43 0 000-.46h9.35a1 1 0 001.08-1.08V6.94a.62.62 0 00-.68-.64zm-3.17 0H17v-.44c-.11-.43-.11-1-.54-1.29a1.15 1.15 0 00-1.3.21c-.43.44-.32 1-.32 1.52h-1.56c.22-4 4.43-4.76 5.3 0zM21 18.11v.07c0 .21-.32.21-.54.21a22.15 22.15 0 01-3.82 0c-1.91-.07-2.71 0-3.7-.06a1.45 1.45 0 00-.29-1 1.65 1.65 0 00.53-1.19.44.44 0 00.33.07c1.6-.1 3.1 0 4.7 0a.59.59 0 00.5-.7c.1-.3-.2-.5-.5-.5H15.4v-1.5h2a.59.59 0 00.5-.7.54.54 0 00-.5-.5h-2c0-.6 0-1.5.6-1.8a1.74 1.74 0 011.4.3c.5.6 1.6 0 1.1-.6a2.66 2.66 0 00-3.6-.5 3.49 3.49 0 00-.8 2.2v.4h-.6a.59.59 0 00-.5.7.54.54 0 00.5.5h.7V15h-.7a.59.59 0 00-.58.51 1 1 0 00-.57-.32 1.08 1.08 0 00.24-.74 2 2 0 00-1.39-1.69h-.12V8c-.32-.21-.1-.43.11-.43h9.37c.22 0 .33.11.33.22a2.53 2.53 0 01.1.86zM7.11 5.68V2.86a.75.75 0 00-1.5 0v2.82a.75.75 0 001.5 0zm-3.81.23L2.23 3.74c-.42-.87-1.72-.11-1.29.75L2 6.66c.43.87 1.72.11 1.3-.75z"/></svg>`;
const freeSvg = `<svg class="gg-u-icon gg-u-icon--medium gg-u-icon--inline" viewBox="0 0 24 24"><path d="M21 7.8c-.1-.2-.4-.3-.7-.4L19 7.3c1.3-1.6 1.4-4.1-.9-5-2.7-1-5.4 1.5-6.3 4C10.5 5 8.5 3.7 6.7 4.2c-1.5.4-2 2.2-1.4 3.4H3.9c-.4 0-.6.3-.6.5v2.7c0 .4.4.6.7.6.2 3.2 0 6.3 0 9.5v.2c-.1.4.1.8.6.8l14.8-.1c.4.1.9 0 .9-.6l-.1-9.9c.4.1.8-.1.8-.6V7.8zm-1.3 2.7h-7.2V8.7l7.3.1-.1 1.7zM4.5 8.8l6.7-.2v1.8H4.4l.1-1.6zm.7 2.9h6l.1 8.9H5.2v-8.9zm7.3 0h6.4l.1 8.9h-6.4l-.1-8.9zm3.8-8.2c1.1-.2 2.4.4 2.4 1.6 0 .9-.8 1.8-1.6 2.2h-4.4c.4-1.6 1.9-3.4 3.6-3.8zM7.6 5.4c.4 0 .9.3 1.3.4.8.4 1.5.9 2 1.6L7 7.5c-1.2-.7-.5-2.2.6-2.1z"/></svg>`;
const warnSvg = `<svg class="gg-u-icon gg-u-icon--medium gg-u-icon--inline" viewBox="0 0 24 24"><path d="M12.7 15.6a1.1 1.1 0 01-1.3 1 1 1 0 01-.7-1.5 1.3 1.3 0 01.8-.6 1 1 0 011 .3 1 1 0 01.2.8zM12.2 6.7c.4.8.3 4.7.2 5.7 0 .6-1 .7-1.3.5-.7-.7-.4-2.6-.4-3.6 0-.6-.2-2.5.5-2.7a1.2 1.2 0 01.8 0 .2.2 0 01.2 0z"/><path d="M19.5 12a8.1 8.1 0 01-9 7.7C6.3 19.3 3 15.3 3 11.1s4.3-6.8 8.2-6.8c4.7 0 8 3 8.2 7.8a.6.6 0 001.2 0 8.8 8.8 0 00-9-9C7.2 2.9 2 5.9 2 11c0 4.8 3.6 9.4 8.5 10a9.4 9.4 0 0010.3-9c.1-.8-1.1-.8-1.2 0z"/></svg>`;

const ggPrices = {
  'a mobile': {
    payg: `${phoneCallSvg} ${normMinsPrice}\n${textSvg} ${normTextsPrice}`,
    goodybag: `${goodybagInclusiveSvg} Inclusive`,
  },
  'a landline': {
    payg: `${phoneCallSvg} ${normMinsPrice}\n${textSvg} ${normTextsPrice}`,
    goodybag: `${goodybagInclusiveSvg} Inclusive`,
  },
  'a mobile or landline': {
    payg: `${phoneCallSvg} ${normMinsPrice}\n${textSvg} ${normTextsPrice}`,
    goodybag: `${goodybagInclusiveSvg} Inclusive`,
  },
  'your giffgaff voicemail': {
    payg: `${phoneCallSvg} 8p per call`,
    goodybag: `${goodybagInclusiveSvg} 1 minute per call`,
  },
  'a freephone': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'a personal': {
    payg: `${phoneCallSvg} ${normMinsPrice} if starting 070`,
    goodybag: `${goodybagInclusiveSvg} Inclusive if starting 070`,
  },
  'a premium rate': {
    payg: `${phoneCallSvg} 25p per minute + service charge`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'the emergency services': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'the police non-emergency': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'the nhs 111': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'the powercut emergency': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'the talking clock': {
    payg: `${phoneCallSvg} 15p per call`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a support helpline': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'a pager': {
    payg: `${phoneCallSvg}40p per minute`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a corporate': {
    payg: `${phoneCallSvg} 20p per minute`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a voice over ip (voip)': {
    payg: `${phoneCallSvg} 8p per minute`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a shared cost': {
    payg: `${phoneCallSvg} 25p per minute + service charge`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a shortcode': {
    payg: `${phoneCallSvg} Pricing set by service provider (between free and £5)`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a society lottery shortcode': {
    payg: `${phoneCallSvg} Pricing set by service provider (between free and £5)`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a directory enquiries': {
    payg: `${phoneCallSvg} 25p per minute + service charge`,
    goodybag: `<span class="warn-text">${warnSvg} Not included</span>`,
  },
  'a giffgaff member services': {
    payg: `${freeSvg} Free`,
    goodybag: `${freeSvg} Free`,
  },
  'a non-geographical standard rate': {
    payg: `${phoneCallSvg} ${normMinsPrice}\n${textSvg} ${normTextsPrice}`,
    goodybag: `${goodybagInclusiveSvg} Inclusive`,
  },
  'an easter egg': {
    payg: `<a target="_blank" href="https://www.youtube.com/watch?v=ab8GtuPdrUQ" class="gg-u-link">The IT Crowd</a>`,
    goodybag: `<a target="_blank" href="https://www.youtube.com/watch?v=ab8GtuPdrUQ" class="gg-u-link">The IT Crowd</a>`,
  },
};

let InternationalPricing;

fetch('/helper-tools/information/number-checker/intl-prices.json').then(function (result) {
  result.json().then(function (j) {
    InternationalPricing = j;
  });
});

document.querySelector('main input').focus();

document.querySelector('main input').addEventListener('keydown', function (e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (
    !(
      [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
      (key == 65 && (e.ctrlKey || e.metaKey)) ||
      (key >= 35 && key <= 40) ||
      (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
      (key >= 96 && key <= 105) ||
      event.key === '+'
    )
  )
    e.preventDefault();
});

function errorForm() {
  document.querySelector('input#phoneNumber').parentElement.classList.value = 'gg-c-form__element gg-c-form__element--invalid';
}

function infoForm() {
  console.log('info');

  document.querySelector('input#phoneNumber').parentElement.classList.value = 'gg-c-form__element gg-c-form__element--info';
}

function validForm() {
  console.log('valid');
  console.trace();

  document.querySelector('input#phoneNumber').parentElement.classList.value = 'gg-c-form__element gg-c-form__element--valid';
}

function noneForm() {
  document.querySelector('input#phoneNumber').parentElement.classList.value = 'gg-c-form__element';
}

function setResultText(text) {
  document.querySelector('#output1').innerHTML = text;
  document.querySelector('#output2').innerHTML = text;
  document.querySelector('#output3').innerHTML = text;
}

function setPayg(text) {
  document.querySelector('p#payg').innerHTML = text;
}

function setGoodybag(text) {
  document.querySelector('p#goodybag').innerHTML = text;
}

document.querySelector('input#phoneNumber').addEventListener('input', function (e) {
  if (this.value.replace(' ', '') === '') {
    setResultText('Please enter a complete phone number');
    infoForm();

    setPayg('Please enter a complete phone number');
    setGoodybag('Please enter a complete phone number');
    return;
  }

  const numFmt = new libphonenumber.AsYouType('GB');

  let value = this.value;

  if (value.startsWith('00')) {
    value = '+' + value.substr(2);
  }

  this.value = numFmt.input(value);

  a = numFmt.getNumber();

  const num = a ? a.number : '';
  if (!a) {
    setResultText('Please enter a complete phone number');
    infoForm();

    setPayg('Please enter a complete phone number');
    setGoodybag('Please enter a complete phone number');
    return;
  }

  delete a;

  const numStr = this.value.replace(/\ /g, '');

  if (Object.keys(specialNumbers).includes(numStr)) {
    ShowNumberType(specialNumbers[numStr]);
    return;
  }

  if (numStr.length === 3) {
    if (['123', '121', '901', '222'].includes(numStr)) {
      ShowNumberType('a Mobile network voicemail');
      validForm();
      return;
    } else if (numStr === '443') {
      ShowNumberType('your giffgaff voicemail');
      validForm();
      return;
    }
  }

  if (!numStr.startsWith('0') && ((numStr.length === 5 && !numStr.startsWith('+')) || (numStr.length === 8 && numStr.startsWith('+44')))) {
    if (numStr.startsWith('70')) {
      ShowNumberType('a Charity Shortcode');
      validForm();
      return;
    } else if (numStr.startsWith('72')) {
      ShowNumberType('a Society Lottery Shortcode');
      validForm();
      return;
    } else {
      if (
        numStr.startsWith('6') ||
        numStr.startsWith('+446') ||
        numStr.startsWith('8') ||
        numStr.startsWith('+448') ||
        numStr.startsWith('7') ||
        numStr.startsWith('+447')
      ) {
        ShowNumberType('a Shortcode');
        validForm();
        return;
      }
    }
  }

  if (numStr.length === 6 && numStr.startsWith('118')) {
    ShowNumberType('a directory enquiries');
    validForm();
    return;
  }

  try {
    const NumberInstance = libphonenumber.parsePhoneNumberFromString(num);

    if (NumberInstance.nationalNumber.startsWith('116') && NumberInstance.nationalNumber.length === 6) {
      ShowNumberType('a Support Helpline');
      validForm();
      return;
    }

    if (NumberInstance.countryCallingCode !== '44') {
      ShowNumberType('an International', NumberInstance.country);
      validForm();
      return;
    }

    const type = NumberInstance.getType();

    if (type === 'UAN' && numStr.startsWith('03')) {
      ShowNumberType('a Non-geographical standard rate');
      validForm();
      return;
    }

    const valueToText = {
      MOBILE: 'a mobile',
      FIXED_LINE: 'a landline',
      FIXED_LINE_OR_MOBILE: 'a mobile or landline',
      PREMIUM_RATE: 'a premium rate',
      TOLL_FREE: 'a Freephone',
      SHARED_COST: 'a Shared Cost',
      VOIP: 'a Voice over IP (VoIP)',
      PERSONAL_NUMBER: 'a Personal',
      PAGER: 'a Pager',
      UAN: 'a Corporate',
      VOICEMAIL: 'a Voicemail',
      undefined: '...',
    };

    ShowNumberType(valueToText[type ? type : typeof type], NumberInstance.country);
  } catch {}
});

function ShowNumberType(type, country = undefined) {
  if (type === '...') {
    if (country) {
      setResultText("I don't know this number");

      setPayg('Unknown');
      setGoodybag('Unknown');

      errorForm();
      return;
    } else {
      setResultText('Please enter more digits');

      setPayg('Please enter more digits');
      setGoodybag('Please enter more digits');

      infoForm();
      return;
    }
  } else if (type === 'an International') {
    setResultText(`This is <b>${type.toLowerCase()}</b> number`);

    if (country) {
      const tariff = InternationalPricing['tariffs'][country.toLowerCase()];

      setPayg(
        `${phoneCallSvg}${tariff.landline} per minute (landline)
        ${phoneCallSvg}${tariff.mobile} per minute (mobile)
      ${textSvg}${tariff.text} per text`.replace(/(\r\n|\r|\n)/g, '<br/>')
      );

      setGoodybag(`<span class='warn-text'>${warnSvg}Not included</span>`);
    } else {
      setResultText('Please enter more digits');

      setPayg('Please enter more digits');
      setGoodybag('Please enter more digits');

      infoForm();
      return;
    }
  } else {
    setResultText(`This is <b>${type.toLowerCase()}</b> number`);
    validForm();

    setPayg(ggPrices[type.toLowerCase()]['payg'].replace('\n', '<br/>'));
    setGoodybag(ggPrices[type.toLowerCase()]['goodybag']);
  }
}
