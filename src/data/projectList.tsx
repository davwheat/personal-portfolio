import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

export type ProjectType = 'Web' | 'Mobile' | 'API' | 'Desktop'
export const AllTech = [
  'Gatsby',
  'React',
  'REST API',
  'Flutter',
  'React Native',
  'Flarum',
  'Typescript',
  'Javascript',
  'Wearables',
  'Android',
  'Kotlin',
  'Express.js',
  'Electron',
] as const
export type Tech = ValuesOf<typeof AllTech>

export interface Project {
  title: string
  type: ProjectType
  description: string
  ImageComponent?: React.FC<ImageProps>
  links: {
    live?: string
    vcs?: string
  }
  tech: ReadonlyArray<Tech>
}

interface ImageProps {
  className: string
}

const IMAGE_INTRINSIC_WIDTH = 600

const projectList: ReadonlyArray<Project> = [
  {
    title: 'Railway Announcements Generator',
    type: 'Web',
    description:
      'Generate announcements for a variety of UK rail networks. Patched together from 100s of recordings, and all assembled client-side.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/rail-announcements.png"
        placeholder="blurred"
        alt="Screenshot of Railway Announcements Generator in use"
      />
    ),
    links: {
      live: 'https://rail-announcements.davwheat.dev/',
      vcs: 'https://github.com/davwheat/rail-announcements',
    },
    tech: ['React', 'Typescript', 'Gatsby'],
  },
  {
    title: 'Rail Dot Matrix',
    type: 'Web',
    description:
      'A UK railway dot-matrix platform indicator simulator, built using React and Gatsby, with a REST API for fetching data from the National Rail API.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/rail-dot-matrix.png"
        placeholder="blurred"
        alt="Screenshot of Rail Dot Matrix in use"
      />
    ),
    links: {
      live: 'https://raildotmatrix.davwheat.dev/',
      vcs: 'https://github.com/davwheat/uk-dot-matrix',
    },
    tech: ['Gatsby', 'React', 'REST API', 'Javascript'],
  },
  {
    title: 'Techway Flue Leakage App',
    type: 'Mobile',
    description:
      'An app created for Techway Solutions Ltd to speed up their leakage testing and certification process. Supports exporting test certificates to PDF.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/techway-leakage-app.png"
        placeholder="blurred"
        alt="Promotional banner. Icon on left showing rounded rectangle with air moving through it and a check mark. Title: Flue Gas Leakage Test Calculator. Subtitle: Easily perform Class B and C flue gas leakage tests."
      />
    ),
    links: {
      live: 'https://play.google.com/store/apps/details?id=dev.davwheat.flueleakagecalculator',
    },
    tech: ['React Native', 'Javascript', 'Android'],
  },
  {
    title: 'Flarum Badge API',
    type: 'API',
    description:
      'Public API for everything related to Flarum extensions. Includes fetching badges to show if your extension supports the latest version of Flarum, to fetching extension icons.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/flarum-badge-api.png"
        placeholder="blurred"
        alt="Screenshot of Flarum Badge API documentation"
      />
    ),
    links: {
      live: 'http://docs.flarum-badge-api.davwheat.dev/',
      vcs: 'https://github.com/davwheat/flarum-badge-api',
    },
    tech: ['REST API', 'Flarum', 'Typescript', 'Express.js'],
  },
  {
    title: 'Sky+ Web EPG',
    type: 'Web',
    description:
      "A recreation of the Sky+ electronic program guide on the web. Pulls in real-time listings from Sky's programme listings API used for Sky Q.",
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/sky-web-epg.png"
        placeholder="blurred"
        alt="Screenshot of Sky Web EPG"
      />
    ),
    links: {
      live: 'https://sky-epg.davwheat.dev/',
      vcs: 'https://github.com/davwheat/sky-plus-web-simulator',
    },
    tech: ['Gatsby', 'React', 'REST API', 'Typescript'],
  },
  {
    title: 'Flarum',
    type: 'Web',
    description: 'Open source framework for creating modern forums. Pioneering accessibility and modern styling and development techniques.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/flarum-discuss.png"
        placeholder="blurred"
        alt="Screenshot of Flarum's official community forum"
      />
    ),
    links: {
      live: 'https://discuss.flarum.org/',
      vcs: 'https://github.com/flarum/core',
    },
    tech: ['REST API', 'Typescript', 'Flarum'],
  },
  {
    title: 'Ticket Barrier Error Lookup',
    type: 'Mobile',
    description: 'Ever wondered why the ticket barriers have told you to "seek assistance"? This app will tell you why.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/gateline-errors.png"
        placeholder="blurred"
        alt="Screenshot of the app in use"
      />
    ),
    links: {
      live: 'https://play.google.com/store/apps/details?id=dev.davwheat.railway.gateline_errors',
      vcs: 'https://github.com/davwheat/uk_railway_gateline_error_lookup',
    },
    tech: ['Flutter', 'Android'],
  },
  {
    title: 'giffgaff for Wear OS',
    type: 'Mobile',
    description: 'Unofficial open-source app which displays key information about your giffgaff account on your Wear OS smartwatch.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/giffgaff-wear.png"
        placeholder="blurred"
        alt="Screenshot of the watch app"
      />
    ),
    links: {
      live: 'https://play.google.com/store/apps/details?id=dev.davwheat.giffgaff.wearable',
      vcs: 'https://github.com/davwheat/giffgaff-for-wear-os',
    },
    tech: ['Kotlin', 'Android', 'Wearables', 'REST API'],
  },
  {
    title: 'giffgaff status',
    type: 'Web',
    description: 'Unofficial open-source website that interfaces with the giffgaff community API to pull in the latest service updates.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/giffgaff-status.png"
        placeholder="blurred"
        alt="Screenshot of giffgaffstatus.com"
      />
    ),
    links: {
      live: 'https://giffgaffstatus.com',
      vcs: 'https://github.com/davwheat/giffgaff-status',
    },
    tech: ['Javascript', 'React', 'REST API', 'Gatsby'],
  },
  {
    title: 'World Cup of Train Operators',
    type: 'Web',
    description:
      'Open-source website to track the World Cup of Train Operators run by Geoff Marshall. Partnered with the respective API, it pulls the latest poll data from Twitter. Created in partnership with Kishan Singh.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/world-cup-of-train-operators.png"
        placeholder="blurred"
        alt="Screenshot of the World Cup of TOCs"
      />
    ),
    links: {
      live: 'https://toccup.davwheat.dev',
      vcs: 'https://github.com/davwheat/world-cup-of-tocs',
    },
    tech: ['Typescript', 'React', 'REST API', 'Gatsby'],
  },
  {
    title: 'World Cup of Train Operators API',
    type: 'API',
    description:
      "Open-source API to pull data about the latest World Cup of TOCs polls from Geoff Marshall's Twitter account. Created in partnership with Kishan Singh.",
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/world-cup-of-train-operators-api.png"
        placeholder="blurred"
        alt="Screenshot of a response from the API"
      />
    ),
    links: {
      live: 'https://toccup.davwheat.dev',
      vcs: 'https://github.com/davwheat/world-cup-of-tocs-api',
    },
    tech: ['Typescript', 'REST API', 'Express.js'],
  },
  {
    title: 'Project Mega Pack Manager API',
    type: 'API',
    description:
      "Open-source API which serves data about all available liveries in Project Mega Pack for the Project Mega Pack Manager. It's used by over 85000 people, and generates 140 TB of traffic per month. Created in collaboration with Jaap Rodenburg.",
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/project-mega-pack-api.png"
        placeholder="blurred"
        alt="Screenshot of a response from the API"
      />
    ),
    links: {
      live: 'https://www.projectmegapack.com',
      vcs: 'https://github.com/MSFS-Mega-Pack/MSFS2020-Livery-API',
    },
    tech: ['Typescript', 'REST API', 'Express.js'],
  },
  {
    title: 'Project Mega Pack Manager',
    type: 'Desktop',
    description:
      "Open-source Electron app which provides management (browsing, installation, and removal) of liveries in Project Mega Pack. It's used by over 85000 people, and generates 140 TB of traffic per month. Created in collaboration with Jaap Rodenburg.",
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/project-mega-pack-manager.png"
        placeholder="blurred"
        alt="Screenshot of the Project Mega Pack Manager"
      />
    ),
    links: {
      live: 'https://www.projectmegapack.com',
      vcs: 'https://github.com/MSFS-Mega-Pack/MSFS2020-livery-manager',
    },
    tech: ['Typescript', 'Electron', 'React', 'REST API'],
  },
  {
    title: 'Boris Briefing Bingo',
    type: 'Web',
    description: "Online bingo board to play along with during Boris Johnson's Coronavirus Press Briefings.",
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/boris-bingo.png"
        placeholder="blurred"
        alt="Screenshot of borisbingo.com"
      />
    ),
    links: {
      live: 'https://borisbingo.com',
      vcs: 'https://github.com/davwheat/boris-johnson-covid-bingo',
    },
    tech: ['Javascript', 'Gatsby', 'React'],
  },
  {
    title: 'Let me really Google that for you',
    type: 'Web',
    description:
      'A version of "Let me Google that for you", without ads or trackers, and that actually uses Google along with other search engines.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/let-me-really-google-that-for-you.png"
        placeholder="blurred"
        alt="Screenshot of Let me REALLY Google that for you"
      />
    ),
    links: {
      live: 'https://lmrgtfy.davwheat.dev/',
      vcs: 'https://github.com/davwheat/let-me-really-google-that-for-you',
    },
    tech: ['Typescript', 'Gatsby', 'React'],
  },
  {
    title: 'BHASVIC B-Mag',
    type: 'Web',
    description: 'A customised content management system for my sixth-form college for publishing magazine articles, built with Flarum.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/b-mag.png"
        placeholder="blurred"
        alt="Screenshot of B-Mag"
      />
    ),
    links: {
      live: 'https://b-mag.bhasvic.ac.uk/',
      vcs: 'https://github.com/BHASVIC',
    },
    tech: ['Typescript', 'REST API', 'Flarum'],
  },
  {
    title: 'mastdatabase.co.uk',
    type: 'Web',
    description: 'A website filled with mobile networking resources for the UK and the rest of the world.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={IMAGE_INTRINSIC_WIDTH}
        src="../assets/images/projects/mastdatabase.co.uk.png"
        placeholder="blurred"
        alt="Screenshot of mastdatabase.co.uk"
      />
    ),
    links: {
      live: 'https://mastdatabase.co.uk/',
      vcs: 'https://github.com/davwheat/mastdatabase.co.uk',
    },
    tech: ['Typescript', 'Gatsby', 'React'],
  },
] as const

export default projectList
