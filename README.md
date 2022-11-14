# start react project manually

<b>[under costruction] [bug - not working]</b>

A purist style approach to make a react app from stretch (without creacte-react-app).

Known Issues:
- file auto build completely absent
- depencies auto injection completely absent

> build command traspile the code, probably not import enything via node depency!

<br>

---

<br>

- init project...<br>
`npm init (or npm init -y)`<br>

- install babel (for jsx and compiling)...<br>
`npm i --save-dev @babel/core` [⇗](https://babeljs.io/docs/en/babel-preset-react)<br>
`npm i --save-dev @babel/preset-react` [⇗](https://babeljs.io/docs/en/babel-preset-react)<br>
`npm i --save-dev @babel/preset-env` [⇗](https://github.com/babel/babel/tree/master/packages/babel-preset-env)<br>
`npm i --save-dev -g babel-cli` [⇗](https://babeljs.io/docs/en/babel-cli)<br>
`npm i --save-dev babel-minify` [⇗](https://babeljs.io/docs/en/babel-minify)<br>

- install react...<br>
`npm i --save --local react react-dom` [⇗](https://www.taniarascia.com/getting-started-with-react/)<br>

- now fix all fix...<br>
`npm audit fix --force`

- in root make .babelrc cofing file:
	```json
	{
		"presets": [

			["@babel/preset-env",{
				"useBuiltIns": "usage",
				"corejs": "3.22",
				"modules": "auto",
				"browserslist": "> 0.25%, not dead"
			}],

			["@babel/preset-react", {
				"pragma": "e",
				"pragmaFrag": "f",
				"throwIfNamespace": false,
				"runtime": "classic"
			}]
			
		],
		"env": {
			"development": {
				"presets": [
					"@babel/preset-env",
					"@babel/preset-react"
				]
			}
		}
	}
	```

- server:

  - if not have express:<br><br>

    1. `npm install http-server`
    2. make a server dir: `mkdir public`<br>
    3. make first ./public/index.html:<br>
    `echo '<!DOCTYPE html><html lang="en"><head><!--<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script><script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>--><meta charset="UTF-8"><title>REACT</title></head><body><div>SERVER RUN - REACT ERROR</div><script type="module" src="./reactor.js"></script></body></html>' > public/index.html`
    4. open package.json and change
       ```"scripts": {...},``` 
       with:
       ```json
		"scripts": {
			"start": "start http://localhost:8080/ && npm run server",
			"server": "http-server -a localhost -p 8080 -c-1",
			"build": "babel ./src/index.js --out-file ./public/reactor.js --source-maps inline && npm run minify",
			"minify": "minify ./public/reactor.js --out-file ./public/reactor.js"
		},
        ```
    5. test server with: `npm run start`<br><br>


  - if you use express:<br><br>

	coming soon...

<br><br>

make react dir:
`mkdir src`

make index.js
`echo '' > src/index.js`

copy index file content:

```jsx
//:
//: Main of react app project
//:

// get react
import React from 'react'
import ReactDOM from 'react-dom/client'

//make app root
const root = ReactDOM.createRoot(document.getElementsByTagName('div')[0])

//render app
root.render(
	<React.StrictMode>
		<h1>HELLO FROM REACT!</h1>
	</React.StrictMode>
)
```