type ProjectType = 'Web' | 'Mobile' | 'API'
type Tech = 'Gatsby' | 'React' | 'REST API' | 'Flutter' | 'React Native' | 'Flarum' | 'Typescript' | 'Javascript'

interface Project {
  title: string
  type: ProjectType
  description: string
  image?: string
  links: {
    live?: string
    vcs?: string
  }
  tech: Tech[]
}

const myProjects: ReadonlyArray<Project> = [
  {
    title: 'Rail Dot Matrix',
    type: 'Web',
    description:
      'A UK railway dot-matrix platform indicator simulator, built using React and Gatsby, with a REST API for fetching data from the National Rail API.',
    image: '',
    links: {
      live: 'https://raildotmatrix.davwheat.dev/',
      vcs: 'https://github.com/davwheat/uk-dot-matrix',
    },
    tech: ['gatsby', 'react', 'REST API'],
  },
  {
    title: 'Techway Flue Leakage App',
    type: 'Mobile',
    description: '',
    image: '',
    links: {
      live: 'https://raildotmatrix.davwheat.dev/',
      vcs: 'https://github.com/davwheat/uk-dot-matrix',
    },
    tech: ['Gatsby', 'React', 'REST API'],
  },
] as const
