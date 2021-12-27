import React from 'react'

import { makeStyles } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles({
  root: {
    border: '2px solid #000',
    padding: 16,
    marginTop: '1em',
    marginBottom: '1em',
  },

  playground: {
    margin: 'auto',
    marginTop: 24,
    width: '100%',
  },
})

export default function MassiveMimoDiagram({ children }) {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "2021/12/31/massive mimo.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <figure className={classes.root}>
      <figcaption className="text-loud text-center">Massive MIMO example</figcaption>

      <div className={classes.playground}>{children}</div>
    </figure>
  )
}
