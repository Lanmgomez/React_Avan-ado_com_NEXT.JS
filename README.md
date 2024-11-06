## Getting Started

First, run the development server:
npm run dev

.prettier explication:
"trailingComma": "none" // remove ',' at the end of line
"singleQuote": false | true // false option uses "" and true uses ''
"semi": false | true // false option removes ";" ate the end of line

.vscode -> settings.json
"editor.formatOnSave": true // run prettier on save

Husky explication: (Check .husky/pre-commit, you create a hook for check your code before commit)
npm install --save-dev husky
npx husky add .husky/pre-commit "npx --no-install lint-staged"

lint-staged explication: (Check .husky/pre-commit, you create a hook for check your code before commit)
npm install --save-dev lint-staged
npx lint-staged

jest:
npm install --save-dev jest @types/jest jest-environment-jsdom
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event --force
