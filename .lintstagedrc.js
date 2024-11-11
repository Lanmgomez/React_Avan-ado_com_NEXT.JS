module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint ${filenames.join(' ')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
