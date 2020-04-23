import React from 'react'

export default (props: {
  body: string
  headComponents: React.ReactNode
  postBodyComponents: React.ReactNode
  preBodyComponents: React.ReactNode
}) => (
  <html lang="en" className="antialiased">
    <head>
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="What movie to watch?" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {props.headComponents}
    </head>
    <body className="bg-blue-900 text-gray-800">
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)
