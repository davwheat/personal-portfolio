import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

export type ProjectType = 'Web' | 'Mobile' | 'API'
export const AllTech = ['Gatsby', 'React', 'REST API', 'Flutter', 'React Native', 'Flarum', 'Typescript', 'Javascript'] as const
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

// Max width of images is ~430px, so we render them at 440px wide
const projectList: ReadonlyArray<Project> = [
  {
    title: 'Rail Dot Matrix',
    type: 'Web',
    description:
      'A UK railway dot-matrix platform indicator simulator, built using React and Gatsby, with a REST API for fetching data from the National Rail API.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={440}
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
        width={440}
        src="../assets/images/projects/techway-leakage-app.png"
        placeholder="blurred"
        alt="Banner. Title: Flue Gas Leakage Test Calculator. Description: Easily perform Class B and C flue gas leakage tests."
      />
    ),
    links: {
      live: 'https://play.google.com/store/apps/details?id=dev.davwheat.flueleakagecalculator',
      //   vcs: 'https://github.com/davwheat/uk-dot-matrix',
    },
    tech: ['React Native', 'Javascript'],
  },
  {
    title: 'Flarum Badge API',
    type: 'API',
    description:
      'Public API for everything related to Flarum extensions. Includes fetching badges to show if your extension supports the latest version of Flarum, to fetching extension icons.',
    ImageComponent: ({ className }) => (
      <StaticImage
        className={className}
        width={440}
        src="../assets/images/projects/flarum-badge-api.png"
        placeholder="blurred"
        alt="Screenshot of Flarum Badge API documentation"
      />
    ),
    links: {
      live: 'http://docs.flarum-badge-api.davwheat.dev/',
      vcs: 'https://github.com/davwheat/flarum-badge-api',
    },
    tech: ['REST API', 'Flarum', 'Typescript'],
  },
] as const

export default projectList
