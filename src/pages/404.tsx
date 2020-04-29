import React from 'react'
import Wrap from '../components/Wrap'
import Box from '../components/Box'

export default () => (
  <Wrap>
    <Box>
      <h2 className="font-semibold text-2xl md:text-4xl mb-4 leading-tight">
        That's a 404.
      </h2>
      <p className="md:text-lg leading-relaxed text-gray-500">
        You could head back to the homepage.
      </p>
    </Box>
  </Wrap>
)
