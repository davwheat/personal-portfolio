import React from 'react'
import PropTypes from 'prop-types'

const HTML: React.FC<Props> = props => {
  return (
    <html lang="en-GB" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link rel="preload" href="/fonts/Jost-Book.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Jost-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

interface Props {
  htmlAttributes: Record<string, unknown>
  headComponents: React.ReactNode
  bodyAttributes: Record<string, unknown>
  preBodyComponents: React.ReactNode
  body: string
  postBodyComponents: React.ReactNode
}

export default HTML
