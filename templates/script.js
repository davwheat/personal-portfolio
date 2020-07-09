const footer = `If you still need help, let us know by clicking the **Reply** button under my message.

Stay safe,
David`;

const imageLicense = `Image licensed under CC-BY-NC-ND 4.0. Attribution to be made to David Wheatley (mrjeeves), with a link to my profile on giffgaff. License terms: https://bit.ly/gglicense`;

const imageUrls = {
  replacement_sim: `https://community.giffgaff.com/assets/files/2020-07-07/1594161074-399376-lost-sim-envelope.png`,
  start_goodybag_early: `https://community.giffgaff.com/assets/files/2020-07-07/1594161002-713949-start-a-new-goodybag-early.png`,
};

let templates = [
  {
    title: 'Footer',
    addFooter: true,
  },
  {
    title: 'Contact an agent',
    content: `You can contact a giffgaff agent at this link:

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'iMessage number reset',
    addFooter: true,
    content: `This is very common when switching phone numbers and using an iPhone.

#### Please follow these steps to reset your number in iMessage

1. Go to **Settings**
2. Go to **Messages**
3. Switch **OFF** iMessage
4. Switch **ON** iMessage
5. **Wait** for it to finish activating iMessage
6. Scroll down to "Send & Receive number" and replace it with your new number - **start with \`+44\` instead of \`0\`**.
6. Once it's done, reboot your phone.

#### After, follow these instructions to reset "My Number"

1. Go to **Settings**, then **Phone**, then **My Number**
2. **Replace the number** you see in there with your new number - **start with \`+44\` instead of \`0\`**.
3. Tap **Save**

##### [color=#0f0]Your messages should now display the right number![/color]

#### If it doesn't work, try this

[color=red]This will also reset saved WiFi networks, mobile data options like usage limits and more.[/color]

1. Go to **Settings**, followed by **General** and then **Reset**
2. Tap **Reset Network Settings**`,
  },
  {
    title: 'Problems after number reset',
    addFooter: true,
    content: `If your old number is showing for text messages and you're using an iPhone, try these steps:

[spoiler]
1. Go to Settings
2. Go to Messages
3. Switch OFF iMessage
4. Switch ON iMessage
5. Wait for it to finish activating iMessage
6. Once it's done, reboot your phone.

Your messages should now display the right number.

If it doesn't work also try this:
Go to Settings > General > Reset > Reset Network Settings. This will also reset saved WiFi networks, mobile data options like usage limits and more.
[/spoiler]

If you have no service or data and/or calls are not working, try waiting until tomorrow morning and restart your phone a few times.

If it still doesn't work, you should contact an agent.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/Number-transfers/Partial-or-no-service-after-transfer/form

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'APN Settings',
    addFooter: true,
    content: `Please check if your APN settings are correct. Sometimes they are only partially set up.

If you use an iPhone, please follow this Apple Support guide to change your APN settings: https://support.apple.com/en-gb/HT201699

If you use an Android device, head to Settings, Mobile Networks/Wireless & Networks, Mobile Network, APNs. After click the 'Add' or 'New' button (it may be hidden behind 3 dots).

Enter the APN values shown below. Please note that some fields may not be shown on all devices, so you might not have to enter all of these.

| Field Name | Field Value |
|---|---|
| Connection Name | giffgaff |
| APN | \`giffgaff.com\` |
| Proxy | [leave blank] |
| Port | [leave blank] |
| Username | \`giffgaff\` |
| Password | [leave blank] |
| Server | \`http://mmsc.mediamessaging.co.uk:8002\` |
| MMSC | \`http://mmsc.mediamessaging.co.uk:8002\` |
| MMS proxy | \`82.132.254.1\` |
| MMS port | \`8080\` |
| MCC | \`234\` |
| MNC | \`10\` |
| Authentication Type | \`PAP or CHAP\` |
| APN type | \`default,supl,mms,ia,xcap\` |
| APN protocol | \`IPv4\` |
| APN roaming protocol | \`IPv4\` |
| Bearer |  [leave blank] or \`Unspecified\` |
| MVNO type |  \`SPN\` |
| MVNO value |  \`giffgaff\` |`,
  },
  {
    title: 'Lost SIM and Phone',
    addFooter: true,
    content: `#### Follow these instructions. I recommend not to follow any suggestions to perform a SIM swap instead.

_Performing a SIM swap won't prevent people using your device on other UK networks, nor will it prevent people selling it, so I strongly recommend against this method._

First, try locating your phone via [Find My iPhone](https://www.icloud.com/#find) or [Android's Find My Device](https://www.google.com/search?q=find+my+device). You can remotely lock your device via the respective links, as well as locate, or ring them.

Afterwards, you'll want to report your SIM and Phone as lost or stolen. This prevents people using them on any UK Network, as well as stops people selling them to phone recycling companies. This will also suspend your giffgaff account to prevent unauthorised charges.

**To bar your phone and SIM, please follow these instructions:**

1. Please go to this URL: https://www.giffgaff.com/support/lost
2. Select 'Bar my phone & SIM'
3. Choose 'Bar my phone & SIM' again

giffgaff will send you a new SIM via 1st Class Post to use in a phone of your choice. It should arrive within 1-3 working days.

**The new SIM will arrive in packaging shown below.**

![${imageLicense}](${imageUrls.replacement_sim})

If you find your phone again, you'll need to contact a giffgaff agent to get the device bar removed here (it can take a few days): https://support2.giffgaff.com/app/ask/My-account/Place-or-remove-an-IMEI-bar/form

After barring your phone, you'll have a replacement SIM sent to your address. Until you receive this, it will look like you haven't activated a SIM on your dashboard. Follow the instructions inside the replacement SIM packaging to reactivate your giffgaff account.`,
  },
  {
    title: 'Lost SIM',
    addFooter: true,
    content: `I recommend reporting your SIM as lost instead of performing a SIM swap.

**To bar your phone and SIM, please follow these instructions:**

1. Please go to this URL: https://www.giffgaff.com/support/lost
2. Select 'Bar my SIM'
3. Choose 'Bar my SIM' again

giffgaff will send you a new SIM via 1st Class Post to use in a phone of your choice. It should arrive within 1-3 working days.

**The new SIM will arrive in packaging shown below.**

![${imageLicense}](${imageUrls.replacement_sim})

After barring your SIM, you'll have a replacement SIM sent to your address. Until you receive this, it will look like you haven't activated a SIM on your dashboard. Follow the instructions inside the replacement SIM packaging to reactivate your giffgaff account.`,
  },
  {
    title: 'SIM Swap',
    addFooter: true,
    content: `You'll need to perform a SIM swap. This is where you keep your number, credit and goodybag but swap your SIM out for a new one.

You can only complete a SIM swap can only between 4:30 AM and 9:30 PM.

**Perform a SIM swap here:** https://www.giffgaff.com/profile/details#simswap

You need any unactivated giffgaff SIM. You can get one from:
- 1. a member's affiliate link (click my name at the top of this post)
- 2. this link: https://www.giffgaff.com/orders/mgm
- 3. your local shop (Tesco, Asda, Co-op, etc.) for under £1

Options 1 and 2 involve having a SIM sent to your house via 1st Class Post. It should arrive within 1-3 working days.

The SIM swap process itself can take up to 24 hours to complete but usually only takes around 30 minutes.

#### You do not need to make a payment to perform a SIM swap.

If you get to a top-up step, [color=red]**STOP**[/color] and make sure you are logged into the giffgaff account which is linked to your phone number.

See this guide for more info: https://www.giffgaff.com/help/articles/my-sim-is-broken`,
  },
  {
    title: 'Return Phone',
    addFooter: true,
    content: `You can return any phone for any reason within 21 days or 30 days if it's faulty.

To see how...

See this link for faulty device: https://www.giffgaff.com/help/articles/return-or-repair-a-faulty-phone
Or this link for changing your mind: https://www.giffgaff.com/help/articles/changing-your-mind-and-returning-your-phone`,
  },
  {
    title: 'Phishing',
    addFooter: true,
    content: `Well done for being suspicious and posting this to the forums to double check. I've left some advice down below.

## This message was not from giffgaff. It is a form of phishing called "smishing" (SMS phishing).

Please forward the message to \`7726\` free of charge to report the spam. You might get a message back asking for the number or name the text came from.

All genuine giffgaff URLs will start with either \`giffgaff.com\` or \`giff.ly\`.

### Information about smishing

[spoiler]

This is another variation of a scam designed to get you to hand over personal and financial details. The scammers fake the message information to make it look like it came from any number or name they choose. In this case they normally pick 443, 43430, or "giffgaff". This lets them fool many victims into responding, believing the message to be genuine.

[/spoiler]

### Advice if you've clicked the link

[spoiler]

Please do not enter any details and, if you have clicked on the link, follow these steps immediately.

1. Change the password to your giffgaff account: https://www.giffgaff.com/support/lost-password

2. Verify all your account details are correct: https://www.giffgaff.com/profile/details

3. Let giffgaff know about the scam so they can tell you about what to do next. Please tell them if you have gotten a text saying a SIM swap is about to be performed: [Account misuse and security issues](https://support2.giffgaff.com/app/ask/Account-misuse-and-security-issues/Account-misuse-and-security-issues/form/)

4. If you suspect your bank details may have been compromised as a result, alert your bank as soon as possible.

5. Change any passwords on any other accounts outside of giffgaff that use the same login info.

[/spoiler]

### About giffgaff cyber security

[spoiler]

Learn more about giffgaff cyber security here: https://community.giffgaff.com/d/22708021-security-update-phishing-smishing-and-sim-swaps 

[/spoiler]

We've alerted a giffgaff educator to the scam and they will contact you shortly via a private message. You'll get an email notification when this happens.

@report_phishing`,
  },
  {
    title: 'Leaving giffgaff',
    addFooter: true,
    content: `Sorry to hear you're leaving giffgaff.

To get your PAC code, text \`PAC\` to \`65075\`. You'll get your PAC within a minute. You can also dial \`43431\` (pen and paper in hand) and follow the prompts to get your PAC code.

Both of these are completely free but will only work in the UK.

You can get your PAC online as well: https://www.giffgaff.com/profile/details/requestpac

Your PAC code will be valid for 30 days. giffgaff doesn't have any early termination fees like other networks.

You will lose any active goodybag, remaining credit, and any payback points you've got.

You can also fully close your giffgaff account by contacting an agent. **Do not do this is you want to transfer your phone number.** Transferring your number will prevent further charges from giffgaff due to Ofcom's new regulations.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/My-account/Cancelling-my-account/form/

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'Close Account',
    addFooter: true,
    content: `You can fully close your giffgaff account by contacting an agent. Do NOT do this is you want to transfer your phone number. Transferring your number will prevent further charges from giffgaff due to OFCOM's new regulations.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/My-account/Cancelling-my-account/form/

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'Get a new GG number',
    addFooter: true,
    content: `It's easy to get a new number; you don't even have to replace your SIM. Remember that you can't choose your number: you get given one randomly. 

Head to this page: https://www.giffgaff.com/profile/details/getnumber

It can take up to 4 hours but is usually quicker.

If you're having issues with premium texts, you can stop them by texting "STOP" to the service's cancellation number. 

You can change your number twice per account. If you want to change it again after that, you have to contact an agent.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/SIM-and-number/Changing-my-number/form

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'Change phone order',
    addFooter: true,
    content: `You can't change an order. You will have to cancel it and reorder it.

You'll have to quickly contact an agent as only they can cancel the order.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/Phones/Buying-a-phone/form

When you get a response (usually within 1-2 hours, but can be up to 24 hours), you should receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://mrjeeves.page.link/responses

If they can't cancel your order, you will have to return it when it arrives.

To see how to return your phone, see this link: https://www.giffgaff.com/help/articles/return-or-repair-a-faulty-phone`,
  },
  {
    title: 'Adult Content Block',
    addFooter: true,
    content: `To deactivate the adult content block, you need either a valid British driver's license or a machine-readable passport.

Northern Irish driver's licenses are not supported at the moment.

You can disable the block from your account settings here: https://www.giffgaff.com/profile/details#adultcontent`,
  },
  {
    title: 'Always On £25 goodybag ban',
    addFooter: true,
    content: `The ban can't be lifted and there is no way of appealing the ban. It usually lasts around 6 months. If you want to leave giffgaff and take your number with you, follow the instructions below to get your PAC. Note that Smarty offer unlimited data (1000 GB) for £20 per month.

If you don't want to leave, you can buy the £20 goodybag instead.

If you do want to leave, you can get your PAC code, text \`PAC\` to \`65075\`. You'll get your PAC within a minute or two. (You can learn more about Text-to-Switch here: https://mrjeeves.page.link/ofcom-text-to-switch)

You can also dial 43431 (pen and paper in hand) and follow the prompts to get your PAC code.

Both of these are completely free but will only work in the UK.

You can get your PAC online as well: https://www.giffgaff.com/profile/details/requestpac

Your PAC code will be valid for 30 days. giffgaff doesn't have any early termination fees like other networks.

Please note that you will lose any active goodybag, remaining airtime credit and any payback points you've got.`,
  },
  {
    title: 'Credit not goodybag',
    addFooter: true,
    content: `Credit is different from goodybags.

Goodybags are prepaid allowances that last for one calendar month.

Credit is pay as you go based, meaning amounts are deducted from your credit balance as you use the network at the rates shown here: https://www.giffgaff.com/pricing

Often, members accidentally buy credit top-ups instead of goodybags. This is quite common.

You can buy goodybags from the 'Buy a goodybag' button on the giffgaff website: https://giffgaff.com/buy/goodybag

You can buy credit top-ups from the 'Add credit' button on the giffgaff website : https://giffgaff.com/top-up`,
  },
  {
    title: 'Referral Payback',
    addFooter: true,
    content: `If you have referred someone to giffgaff via an affiliate SIM, you get 500 payback points (equal to £5) added to your account.

If you have joined giffgaff recently and referred someone with an affiliate SIM within 42 days of joining us, you'll also get an **extra £5 credit** added to your account within 5 working days.

These payback points are calculated every month between the 5th and 15th. Any points you gain this month will show up next month.

An affiliate SIM means a SIM ordered by you through your ['share the love'](https://www.giffgaff.com/orders/mgm) page or a SIM ordered by someone else via your affiliate link.

The points can be seen here: https://giffgaff.com/profile/payback

You can redeem these as credit, donate them to charity or get them paid to PayPal (if you have £10 or more) every 6 months, in June and December.`,
  },
  {
    title: 'Family Account',
    addFooter: true,
    content: `There isn't a way to have multiple SIMs on one account at the moment on giffgaff.

In the meantime, you will have to have a separate account for each SIM. You can still use the same payment method, email, address, etc. on each account but they will each have a different number and membername.

Sorry about that.`,
  },
  {
    title: '2 SIMs 1 Number',
    addFooter: true,
    content: `There isn't a way to have multiple SIMs for the same number on **any UK network**. This is due to the laws surrounding SIMs and phone numbers not allowing this.

In the meantime, you will have to have a separate account for each SIM, and a different number for each. You can still use the same payment method, email, address, etc. on each account but they will each need to have a different number and membername.

Sorry about that.`,
  },
  {
    title: 'Number recycling',
    addFooter: true,
    content: `If you haven't used your SIM for 6 months or more, it will be deactivated with all credit lost and the number gone forever. This is in compliance with Ofcom's number recycling regulations.

Usage counts as:
- any chargeable text (SMS or MMS) or call (not emergency services or member services)
- any data connection
- any top-up or goodybag purchase

This is stated in the [giffgaff terms and conditions](https://www.giffgaff.com/terms), under section 13.3.

Sorry about that.

You can [order another free SIM](https://www.giffgaff.com/orders/mgm) and activate it on your giffgaff account if you want to use giffgaff again.`,
  },
  {
    title: 'Start goodybag early',
    addFooter: true,
    content: `It's only possible to start a goodybag early if you have under 100 MB data left in your current goodybag.

You can check your remaining allowances on your [dashboard](https://www.giffgaff.com/dashboard). You can also still access the giffgaff website if you have no data.

If you want to start your goodybag early, click on the 'Start my next goodybag now' button under the [color=red]**Running low**[/color] banner.

By starting your goodybag early, you will lose all remaining allowances.

![${imageLicense}](${imageUrls.start_goodybag_early})`,
  },
  {
    title: 'lol u bad no helpline',
    addFooter: true,
    content: `The fact we don't have a call centre is the reason giffgaff can offer cheaper service than other providers. Instead of a call centre, giffgaff pay members to provide support on the forum. For account related issues, [agents](https://support2.giffgaff.com/app/ask) are available to help. Either way, who has time for *phone calls*... it's ${new Date().getFullYear()}!

You don't have to be part of the mobile network if you don't want to. If you'd rather be with a network that offers a call centre, feel free to join one of the other big players.

If you want a good deal and **90 second response time** (something that call centres can't offer) then stick with giffgaff - the mobile network run by you.

After all, there's a reason [we've won uSwitch network of the year 2018 and 19](https://www.uswitch.com/mobiles/networks/giffgaff/).`,
  },
  {
    title: 'Reset Password',
    addFooter: true,
    content: `There's a few ways to get your password reset.

## Via your phone

You can text the word \`FORGOTTEN\` to \`43430\` to get a password reset link for your account and your member name. Easy as pie.

## Via the website

Head to the [password reset page](https://www.giffgaff.com/support/lost-password) and choose either **email** or **text**.

You can either enter your member name or phone number. If you're getting the link sent to your email, you can also enter your email instead.`,
  },
  {
    title: 'Network shortcodes/balance or goodybag info',
    addFooter: true,
    content: `Here are some useful short codes. If what you're looking for isn't shown below, you'll have to check the dashboard on the website or the app: https://giffgaff.com/dashboard

| Description | Number to dial |
|--------------------------------------------------|:--------------:|
| Remaining airtime credit credit | \`*100#\` |
| Free giffgaff to giffgaff calls/texts expiration | \`*100*1#\` |
| Goodybag: remaining texts (£6 only) | \`*100*5#\` |
| Goodybag: remaining minutes | \`*100*7#\` |

To check the data remaining on your goodybag, you have to use the app or website or dial \`43430\` and choose Option 2. Then you'll hear everything remaining on your goodybag.`,
  },
  {
    title: 'RCS',
    addFooter: true,
    content: `It is here!

Well... not in the way you'd expect.

giffgaff and most UK networks don't plan to implement it soon (for what I know) but you can manually enable it to work via Google's servers instead. The downside is that everyone else also has to enable it and use Google Messages.

1. Download [Google Messages](https://play.google.com/store/apps/details?id=com.google.android.apps.messaging) on your Android phone
3. Open up Google Messages and click through the tutorial, then set it as your default SMS app when it asks
4. Tap the three dots, then tap Settings
5. Tap Advanced
6. Tap 'Phone number' and enter your phone number **with the +44 prefix**
7. Tap the back arrow
5. Tap Chat Features
6. Switch on 'Enable chat features'
7. You're all set!

If that doesn't work, you may have to use a workaround...

1. Download [Activity Launcher](https://play.google.com/store/apps/details?id=de.szalkowski.activitylauncher&hl=en) on your Android phone
3. Open up Activity Launcher
4. After the list appears, scroll down to 'Messages' and tap it
5. Tap 'Set RCS Flags'
6. Tap 'Set ACS Url' and set it to 'http://rcs-acs-prod-us.sandbox.google.com/'
7. Follow the above instructions again`,
  },
  {
    title: 'Apple Watch eSIM',
    addFooter: true,
    content: `Sorry but the Apple Watch **Cellular** won't be supported any time soon.

So far, only three networks support the Apple Watch: O2, EE and Vodafone.

This is because the Apple Watch relies on a new technology called eSIM. This is a virtual SIM stored on a small chip inside the device. At the moment, only some big networks support this (EE, O2 and Vodafone). No piggyback networks (e.g. giffgaff, Tesco, Plusnet, BT, ID Mobile, Smarty) can use the technology. This is because Apple  refuse to license their proprietary and non-standard technology to any of the 'small folk'.

You'll have to switch network to use the **cellular** functions of the Watch, but the **WiFi and Bluetooth connections will still work fine**.`,
  },
  {
    title: 'EU Roam Like At Home',
    addFooter: true,
    content: `#### Roaming in the EU Basics

[spoiler]

You can spend up to **63 days within a 4 month period in the EU under the Roam Like At Home** (RLAH) policy. Any usage outside of this period is subject to small charges for goodybag users (0.36p/MB for data, 3.2p/minute for calls and 1p/text for texts). Pay As You Go users will still be charged the [normal UK rates](https://www.giffgaff.com/pricing).

When visiting any country listed at the bottom of this post, network usage (calls, texts, data) will cost exactly the same as when you're at home in the UK. Sweet, right?

[/spoiler]

#### Important message about £20 and £25 goodybags

[spoiler]

Please note that the Always On (£25) and £20 goodybags will be limited to 20 GB data when roaming in the EU, instead of the "normal" (technically a special offer) 80 GB. This is detailed when you are buying a goodybag, as well as on the [goodybags page](https://www.giffgaff.com/sim-only-plans) (under [color=#074984]**More info**[/color] on the applicable goodybags). After the 20 GB is up, you'll be charged 0.36p/MB.

[/spoiler]

#### Roaming Terms

[spoiler]

To prevent breaking the fair use policy, **giffgaff recommend avoiding**:

> * Using their services for the first time outside of the UK;
> * Using a large volume of your allowance in the EU and our other selected destinations (excluding the UK); or
> * Using their services and travelling within the EU and our other selected destinations for prolonged periods which don’t follow reasonable consumer holiday and travel patterns and behaviour.

Please remember that the examples above aren’t an exhaustive list of how you could breaching giffgaff's Fair Usage Policy. Other activities which giffgaff believe to be outside of legitimate consumer use may also be subject to the terms in this Fair Usage Policy.

[/spoiler]

#### Included countries

[spoiler]

Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, French Guiana, Germany, Gibraltar, Greece, Guadeloupe, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Martinique, Mayotte, Netherlands, Norway, Poland, Portugal, Reunion, Romania, San Marino, Slovakia, Slovenia, Spain, and Sweden. 

[/spoiler]

For more info, please read the [fair usage while roaming](https://www.giffgaff.com/fair-usage-while-roaming) page.`,
  },
  {
    title: 'Unlock phone',
    addFooter: true,
    content: `If your phone asks for a Network PIN or Network Unlock Code, it means that your device is locked to another mobile network.

To use giffgaff, you have to have a device either locked to O2, giffgaff or unlocked. Please note that devices locked to other O2 MVNOs (e.g. Tesco)  will **not** work.

As your device is locked, you'll need to contact your old network for an unlock code, or take it to a local phone shop.

You can find out how to unlock your phone on the [giffgaff unlockapedia](https://www.giffgaff.com/unlock/unlocking-quick-start-guide-faq). Please note that unlocking your phone via a 3^rd party will [likely void your device's warranty](https://www.giffgaff.com/unlock/mobile-phone-unlocking-affect-warranty-faq) so, if your device is still covered under warranty and that matters to you, you'll want to contact your previous network to unlock it.`,
  },
  {
    title: 'Always on not unlimited',
    addFooter: true,
    content: `The £25 goodybag comes with Always On data. This is **not the same as unlimited**.

With the Always On goodybag, you get a whopping 80 GB of full-speed 4G data. However, after the 80 GB are gone, you're speed limited to 386 Kbps between 8 am and midnight.

Sorry about that misunderstanding.`,
  },
  {
    title: 'repair phone',
    addFooter: true,
    content: `If you bought your phone from giffgaff, you can send it back to get it repaired if it's faulty.

Please note that accidental damage is not covered by your warranty. Any water damage voids the warranty immediately, and the repair centre may refuse to fix it.

Please see this guide for sending in your phone for repair: https://www.giffgaff.com/help/articles/return-or-repair-a-faulty-phone

**Make sure not to send in any accessories (except the charger if it's a charging issue) or the original box as they may not send them back afterwards.**`,
  },
  {
    title: 'giffgaff locked phone',
    addFooter: true,
    content: `All giffgaff phones are sold unlocked for use on any network you please.

Sometimes, the phones can lock themselves for some reason. This is more common with iPhones.

Often, a factory reset (with your new network's SIM card installed) can solve the problem. If this doesn't work, you'll need to contact an agent for an unlock code.

You can contact a giffgaff agent at this link: https://support2.giffgaff.com/app/ask/Getting-Started/Unlocking-my-phone/form/

Agents always aim to respond within 24 hours (in some busy periods it can take up to 48 hours). It usually only takes 3-5 hours. Agents work everyday between 8 am and 11 pm.

When you get a response, you will receive a text and email alert telling you. You can view the response either from the bottom of your giffgaff dashboard, or by clicking this link: https://www.giffgaff.com/support/questions`,
  },
  {
    title: 'sim problems',
    addFooter: true,
    content: `Have a look through these great troubleshooting steps that I've put together for you.

## Troubleshooting steps

### Check your local masts

[spoiler]

Have a look and check that the network isn't down in your area: https://giffgaff.com/coverage-and-service#network

If it is, you can sign up for text alerts when the problem is solved here: https://status.o2.co.uk

[/spoiler]

### New member?

[spoiler]

Are you new to giffgaff? If so, you might need to wait for up to 24 hours for your SIM to be fully activated.

Usually this happens much quicker (within 30 mins or so) but in some periods, it can take longer.

[/spoiler]

### APN settings

[spoiler]

Please check if your APN settings are correct. Sometimes they are only partially set up.

If you use an iPhone, please follow this Apple Support guide to change your APN settings: https://support.apple.com/en-gb/HT201699

If you use an Android device, head to Settings, Mobile Networks/Wireless & Networks, Mobile Network, APNs. After click the 'Add' or 'New' button (it may be hidden behind 3 dots).

Enter the APN values shown below. Please note that some fields may not be shown on all devices, so you might not have to enter all of these.

| Field Name | Field Value |
|---|---|
| Connection Name | giffgaff |
| APN | \`giffgaff.com\` |
| Proxy | [leave blank] |
| Port | [leave blank] |
| Username | \`giffgaff\` |
| Password | [leave blank] |
| Server | \`http://mmsc.mediamessaging.co.uk:8002\` |
| MMSC | \`http://mmsc.mediamessaging.co.uk:8002\` |
| MMS proxy | \`82.132.254.1\` |
| MMS port | \`8080\` |
| MCC | \`234\` |
| MNC | \`10\` |
| Authentication Type | \`PAP or CHAP\` |
| APN type | \`default,supl,mms,ia,xcap\` |
| APN protocol | \`IPv4\` |
| APN roaming protocol | \`IPv4\` |
| Bearer |  [leave blank] or \`Unspecified\` |
| MVNO type |  \`SPN\` |
| MVNO value |  \`giffgaff\` |

[/spoiler]

### Manual roam

[spoiler]

See this great guide to perform a manual roam: https://www.giffgaff.com/help/articles/how-to-perform-a-manual-roam

This can often fix all sorts of strange issues you're having.

[/spoiler]

### Faulty SIM

[spoiler]

If it's still not working, your SIM might be faulty. This can just happen at random, but it's easy to replace your SIM.

You'll need to perform a SIM swap. This is where you keep your number, credit and goodybag but swap your SIM out for a new one.

You can only complete a SIM swap can only between 4:30 AM and 9:30 PM.

#### Perform a SIM swap here https://www.giffgaff.com/profile/details#simswap

You need any unactivated giffgaff SIM. You can get one from:
- 1. a member's affiliate link (click my name at the top of this post)
- 2. this link: https://www.giffgaff.com/orders/mgm
- 3. your local shop (Tesco, Asda, Co-op, etc.) for under £1

Options 1 and 2 involve having a SIM sent to your house via 1st Class Post. It should arrive within 1-3 working days.

The SIM swap process itself can take up to 24 hours to complete but usually only takes around 30 minutes.

#### You do not need to make a payment to perform a SIM swap.

If you get to a top-up step, [color=red]**STOP**[/color] and make sure you are logged into the giffgaff account which is linked to your phone number.

[/spoiler]`,
  },
  {
    title: 'ratesetter-contact',
    addFooter: true,
    content: `You need to contact RateSetter, the company managing giffgaff phone loans.

You can call RateSetter on 020 3142 6226 or email at borrow@ratesetter.com.

**Email is recommended at the moment due to COVID-19.**

Their contact hours are shown below.

|Days|Times|
|---|---|
| Monday - Friday|8 am - 6 pm |
| Saturday|9:30 am - 5:30 pm |

RateSetter contact page: https://www.ratesetter.com/help`,
  },
  {
    title: 'ratesetter loan',
    addFooter: true,
    content: `RateSetter are the company that manage loan applications for pay monthly phone purchases.

When buying a pay monthly phone, you'll go through a soft credit check by RateSetter. This will not affect your credit score. They will then decide whether or not to approve your loan application.

You'll know if you were approved or not as you'll be sent an email. This is sent by the end of the next working day (not 24 hours as some say).

If you're approved **you must click the link in the email to confirm your order.** If you don't you won't receive your phone and your application will expire, so you will have to go through the whole process over again.

If you decide you no longer want to buy the phone (for example you found a better deal elsewhere) then ignore the email. You won't be charged.

If you don't get an email after 2 business days, you should contain RateSetter. For contact details, click the button below.

[spoiler]

You can call RateSetter on 020 3142 6226 or email at borrow@ratesetter.com.

**Email is recommended at the moment due to COVID-19.**

Their contact hours are shown below.

|Days|Times|
|---|---|
| Monday - Friday | 8 am - 6 pm |
| Saturday | 9:30 am - 5:30 pm |

RateSetter contact page: https://www.ratesetter.com/help

[/spoiler]`,
  },
  {
    title: 'imessage advanced',
    addFooter: true,
    content: `Here's some advanced troubleshooting steps to take. Do these in order, making sure to wait any time period specified.

**Make sure your Date & Time Zone are set to automatic**: Settings > General > Date & Time > Set Automatically.

**Sign out of your Apple ID:** Settings > Messages > Send & Receive > Tap your Apple ID at the top > Sign Out.

**Then turn OFF iMessage** (Settings > Messages) and restart your phone.

**Turn iMessage ON** when your phone turns back on.

**Sign into your Apple ID**: Settings > Messages > Send & Receive > Use your Apple ID for iMessage.

**Make sure there isn't a carrier settings update available**: Settings > General > About. Just wait on this screen for about 30 seconds. If an update is available, you'll see a pop-up message.

**Please wait 24 hours - no less.**

If none of this works, you may need to [contact Apple Support](https://getsupport.apple.com/?locale=en_GB&SG=SG003) as they'll be able to escalate your case.`,
  },
  {
    title: 'cheap-roam',
    content: `

|Service|Cost|
|:---|:---:|
|Data|20p/MB|
|Calls & voicemail ^(\(charged per sec after 30s\))|£1/min|
|Receiving calls ^(\(charged per min\))|£1/min|
|Sending texts|30p each|
|Receiving texts|Free!|
|MMS to UK/EU mobiles|30p each|
|MMS to all other mobiles|24p each|`,
  },
  {
    title: 'high-roam',
    content: `

|Service|Cost|
|:---|:---:|
|Data|[color=red]£5/MB[/color]|
|Calls & voicemail ^(\(charged per sec after 30s\))|£1/min|
|Receiving calls ^(\(charged per min\))|£1/min|
|Sending texts|30p each|
|Receiving texts|Free!|
|MMS to UK/EU mobiles|30p each|
|MMS to all other mobiles|24p each|`,
  },
];
