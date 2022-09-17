### Configure VSCode:

- Install extensions:
  - ESLint
  - Prettier - Code formatter
- Go to Preferences -> Settings:
  - Default Formatter : 'Prettier - Code Formatter'
  - Format On Save : enabled
- Go to user settings.json and paste ./vscode/settings.json content:
  - &#8984; + &#8679; + P for mac
  - ctrl + &#8679; + P for Win/linux
  - search for settings.json
- Reload VSCode

#### _VSCode Overrides_

_.prettierc file override VSCode user settings.json values_, for exemple:

```
settings.json : "prettier.singleQuote": true
.prettierc    : "singleQuote": false
```

_Result : "singleQuote": false -> doubleQuote used in project_

### User snippets

- Go to user snippets :
  - Snippets: Configure User Snippets
  - paste ./vscode/snippets content in respective files:
- Usage example :
  - Create .tsx file
  - Using prefix from snippet to create template: `rnfc + Enter key`

### Husky

- .husky folder contains pre-commit hook for linting all staged files and running jest tests
