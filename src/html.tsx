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
      <title>Blockbust • Get a movie recommendation 🎥</title>
      <meta
        property="og:title"
        content="Blockbust • Get a movie recommendation 🎥"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blockbust" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Sometimes, you just don't know what movie to watch. Blockbust will make the choice for you."
      />
      <meta
        property="og:description"
        content="Sometimes, you just don't know what movie to watch. Blockbust will make the choice for you."
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:secure_url"
        content="https://blockbust.netlify.app/blockbust.jpg"
      />
      <meta
        property="og:image"
        content="https://blockbust.netlify.app/blockbust.jpg"
      />
      <meta data-react-helmet="true" property="og:locale" content="en_US" />
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
