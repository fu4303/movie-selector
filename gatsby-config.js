module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-71606638-1' },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: { purgeOnly: ['style.css'], tailwind: true },
    },
    'gatsby-plugin-typescript',
  ],
}
