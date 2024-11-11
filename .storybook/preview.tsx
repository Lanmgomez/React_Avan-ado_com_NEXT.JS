// esse arquivo está fora do ambiente Next.js, por isso o import de React tem que ser feito dessa maneira
import React from 'react'
import '../src/styles/_globalStyles.scss'

export const decorators = [
  (Story) => (
    <div className="body-styled">
      <Story />
    </div>
  )
]
