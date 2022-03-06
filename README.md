# configs
for settings.json in VSCODE: CTRL/CMD + P and type "settings.json"

for snippets.json in VSCODE: Preferences -> User Snippets -> Javascript.  
<br /> 
#### Overrides
.prettierc override settings.json values, for exemple:
```
.prettierc.js : singleQuote: false
settings.json : "prettier.singleQuote": true 
```
Result : doubleQuote used in project
